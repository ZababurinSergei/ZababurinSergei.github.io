#!/usr/bin/env node

import {createRequire} from 'module';

const require = createRequire(import.meta.url);
import ora from 'ora';
import dirTree from 'directory-tree';

let CONFIG = require('../biowasm.json');
import {Command} from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'node:fs';
import path from 'path';
import {exec, spawn} from 'node:child_process';
import dotenv from "dotenv"
import readline from 'readline';
import {stdin as input, stdout as output} from 'process';
import config from 'config';
import ansis from 'ansis';

dotenv.config();

const prompt = inquirer.prompt;
const program = new Command();

let __dirname = path.dirname(path.join(process.argv[1], '../'));

// Config
const DIR_ROOT = __dirname;
const DIR_BUILD = `${DIR_ROOT}/build`;
let DIR_MANIFEST = `${DIR_ROOT}/biowasm.manifest.json`;
let DIR_MANIFEST_TEMP = `${DIR_BUILD}/manifest.tmp`;
const DIR_CF_UPLOAD = `${DIR_BUILD}/cf_kv_upload.json`;
const DIR_CONFIG = `${DIR_ROOT}/biowasm.json`;
const COLOR_GREEN = 'green';
const COLOR_OFF = 'white';

// # Global state
let MANIFEST = {};
let LEVEL = 0;

//https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html#8-colors

function color(str, color, type) {
    return typeof ansis[color] === 'function' ? `${ansis[color](str)}` : `${ansis.hex(color).open}${str}${ansis.hex(color).close}`;
}

const execution = (cmd, options = {
    type: 'exec',
    options: false
}) => {
    return new Promise((resolve, reject) => {
        /**
         * Execute a Bash command or just print it on screen if dry run enabled
         */
        if (options.type === 'spawn') {
            const spinner = ora().start();
            spinner.color = 'yellow';

            console.log('options', options.params)
            let child = spawn(`bash`, options.params);

            child.stdout.setEncoding('utf8');
            child.stdout.on('data', (data) => {
                console.log(color(data, '#4664c5', 'spawn'));
            });

            child.stderr.setEncoding('utf8');
            child.stderr.on('data', (data) => {
                console.log(color(data, '#d21414', 'spawn'))
            });

            child.on('error', (error) => {
                console.log(color(error, '#d21414', 'spawn'))
            });

            child.on('close', (code) => {
                if(code === 0) {
                    console.log(color(`child process exited with code ${code}`, '#0dd906', 'spawn'))
                } else {
                    console.log(color(`child process exited with code ${code}`, '#d90606', 'spawn'))
                }

                spinner.stop().clear()
                resolve(true)
            });

        } else {
            const spinner = ora(`execution: ${color(`${cmd} `, 'blue', 'spinner')}`).start();
            exec(`${cmd}`, (error, stdout, stderr) => {
                if (error) {
                    console.log()
                    console.log(color(`\n--------------------\n${error.toString()}--------------------`, 'red', 'exec'))
                    for (let key in error) {
                        console.log(key, error[key])
                    }
                    console.log(color('--------------------', 'red', 'exec'))
                    reject(error);
                    process.exit(error.code)
                }

                stdout = stdout.length !== 0 ? stdout : ''
                console.log(color(stdout, 'cyan', 'exec'));

                spinner.stop().clear()
                resolve(stdout);
            });
        }


    }).catch(e => {
        console.log(color(e, 'red', 'catch error'))
        process.exit(1)
    });
};

const compile = async (tool, versions = [], level = 0) => {
    LEVEL = level

    let tool_info = CONFIG["tools"].find(item => item.name === tool)
    let files = tool_info["files"]
        ? tool_info["files"]
        : ["js", "wasm"]

    let programs = tool_info["programs"]
        ? tool_info["programs"]
        : [tool]

    let currentVersion = false

    for (let v of tool_info["versions"]) {
        currentVersion = versions.map(item => {
            if (item === v.version) {
                return v
            }
        })
    }

    let tool_git_path = `${config.get('next') ? './' : ''}tools/${tool}/src/`
    if (currentVersion.length === 0) {
        console.log(color(`No valid versions found in biowasm.json for ${tool}. Make sure versions don't start with 'v'.`, 'red', 'compile'))
        process.exit(1)
    }

    await execution(`git submodule update --init --recursive ${tool_git_path} && git submodule status ${tool_git_path}`, {
        type: 'exec',
        options: false
    })

    for (let version_info of currentVersion) {
        const version = version_info["version"]
        const branch = version_info["branch"]
        const dependencies = version_info["dependencies"] ? version_info["dependencies"] : []
        for (let dependency_info of dependencies) {
            await compile(dependency_info["name"], [dependency_info["version"]], level + 1)
        }

        LEVEL = level

        const dir_build = `${DIR_BUILD}/${tool}/${version}`
        await execution(`mkdir -p ${dir_build}`)
        // await execution(`${config.get('next') ? './' : ''}bin/compile.sh tools/${tool} ${branch}`
        await execution('bash', {
            type: 'spawn',
            params: [
                `${config.get('next') ? './' : ''}bin/compile.sh`,
                `tools/${tool}`,
                `${branch}`
            ]
        })

        for (let program of programs) {
            for (let file of files) {
                await execution(`cp ${config.get('next') ? './' : ''}tools/${tool}/build/${program}.${file} ${dir_build}/`)
                await execution(`md5sum ${dir_build}/${program}.${file} | sed 's|${DIR_BUILD}/||' >> ${DIR_MANIFEST_TEMP}`)
            }
        }
    }

    return true
}

const get_file_contents = (path, args) => {
    console.log(color('get_file_contents', 'rgba(172,193,33,0.91)', 'get_file_contents'), path)

    if (args.dry_run) {
        console.log(color(`<return ${path}>`, 'blue', 'get_file_contents'))
        return path
    }

    if (path.endsWith('.wasm') || path.endsWith('.data')) {
        let buff = Buffer.from(fs.readFileSync(path, 'utf8'))
        let base64data = buff.toString('base64');
        return [base64data, true]
    } else if (path.endsWith('.js') || path.endsWith('.mjs') || path.endsWith('.cjs')) {
        try {
            return [fs.readFileSync(path, 'utf8'), false];
        } catch (err) {
            console.error('error', err);
        }
    } else {
        console.log(color(`Unexpected file extension for file '${path}'.`, 'red', 'get_file_contents'))
        return false
    }
};
const generate_manifests = async (options) => {

    if (options.dry_run) {
        console.log(color("<update manifest>", 'blue', 'generate_manifests'))
        return;
    }

    let to_upload = []

    if (fs.existsSync(DIR_MANIFEST_TEMP)) {
        const fileStream = fs.createReadStream(DIR_MANIFEST_TEMP);
        const rl = readline.createInterface({
            input: fileStream,
            output: output
        });

        for await (const row of rl) {
            let [hash, path] = row.split("  ")
            path = path.trim()
            hash = hash.trim()

            const kv_key = `${path}:${hash}`
            const [kv_value, kv_base64] = get_file_contents(`${DIR_BUILD}/${path}`, options)

            if (MANIFEST[path] !== kv_key) {
                console.log(color(`Adding ${path} to list of KVs to upload...`, 'cyan', 'generate_manifests'))
                MANIFEST[path] = kv_key

                to_upload.push({
                    "key": kv_key,
                    "value": kv_value,
                    "base64": kv_base64
                })
            }
        }

        console.log('================== # Save manifest JSON files')

        try {
            await fs.writeFileSync(DIR_CF_UPLOAD, JSON.stringify(to_upload, null, 4))
            await fs.writeFileSync(DIR_MANIFEST, JSON.stringify(MANIFEST, null, 4))
            await execution(`rm ${DIR_MANIFEST_TEMP}`)
        } catch (err) {
            console.log('generate_manifests ERROR', err);
        }
    }

    return true
};

const List = () => {
    /**
     * List all biowasm packages
     */

    for (let tool of CONFIG['tools']) {
        let name = tool['name'];
        console.group(color(name, 'green'));
        for (let i = 0; i < tool.versions.length; ++i) {
            if (i === tool.versions.length - 1) {
                console.log(`└── ${color(tool.versions[i].version, 'blue', 'List')}`);
            } else {
                console.log(`├── ${color(tool.versions[i].version, 'blue', 'List')}`);
            }
        }
        console.groupEnd();
    }
};

program
    .version('1.0.0')
    .description('Configuration files creator.')

program
    .option('--list', 'List tools available')
    .option('--dry-run', 'Dry run')
    .option('--tools <TOOLS>', 'version tools')
    .option('--versions <VERSIONS>', 'Tool version(s)')
    .option('--env ENV', 'Environment (stg, prd)')
    .description('Tool to compile to WebAssembly.')
    .action(async (options, cmd) => {
        let to_upload = []
        let {tools, versions, list, dry_run} = options;
        const env = process.env.ENVIRONMENT

        if (env && env.trim() === 'stg') {
            DIR_MANIFEST = DIR_MANIFEST.replace('.json', '.stg.json')
            DIR_MANIFEST_TEMP = DIR_MANIFEST_TEMP.replace('.tmp', '.stg.tmp')
        }

        console.log(color('CONFIG', 'magenta', 'program.action_1'), {
            type: process.env.ENVIRONMENT,
            config: {
                next: config.get('next'),
            },
            DIR_ROOT: DIR_ROOT,
            DIR_CONFIG: DIR_CONFIG,
            DIR_MANIFEST: DIR_MANIFEST,
            DIR_BUILD: DIR_BUILD,
            DIR_CF_UPLOAD: DIR_CF_UPLOAD,
            DIR_MANIFEST_TEMP: DIR_MANIFEST_TEMP
        });

        try {
            CONFIG = JSON.parse(await fs.promises.readFile(DIR_CONFIG, 'utf8'));
            MANIFEST = JSON.parse(await fs.promises.readFile(DIR_MANIFEST, 'utf8'));
        } catch (err) {
            console.log(color('что-то пошло не так', 'red', 'program.action_2'), err);
        }

        if (fs.existsSync(DIR_MANIFEST_TEMP)) {
            console.log(color("Manifest file already exists from previous run. Delete it first.", 'red', 'program.action_3'))
            process.exit(1)
        } else {
            if (list) {
                List(CONFIG);
            } else if (tools) {
                tools = tools.split(",")

                if (tools.some(item => item.trim() === "all")) {


                } else {
                    tools = tools.map(item => {
                        if (CONFIG["tools"].some(tool => tool.name === item)) {
                            return item
                        }
                    })

                    versions = versions.split(",")
                    versions = versions.length !== 0 ? versions : []
                    for (let tool_name of tools) {
                        await compile(tool_name, versions)
                    }
                }
                // # Regenerate manifest files
                await generate_manifests(options)
            } else if (env && env.trim() === 'stg') {
                // DIR_MANIFEST = DIR_MANIFEST.replace('.json', '.stg.json')
                // DIR_MANIFEST_TEMP = DIR_MANIFEST_TEMP.replace('.tmp', '.stg.tmp')
            } else {
                console.log('USAGE', options)
            }

        }
    });

program.parse(process.argv);