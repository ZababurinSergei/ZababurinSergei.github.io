import * as esbuild from 'esbuild'
import * as fs from "fs-extra";
import cssModulesPlugin from "esbuild-css-modules-plugin";
import { polyfillNode } from "esbuild-plugin-polyfill-node";
import path from 'path';
import * as dotenv from 'dotenv'
dotenv.config()

const __dirname = path.join(path.dirname(process.argv[1]), './');

const isWatch = process.argv.includes("--watch");

let define = {}
const cyrb53 = (str, seed = 0) => {
    let h1 = 0xdeadbeef ^ seed,
        h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }

    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);

    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};


for (const k in process.env) {
    if (k.startsWith('REACT_APP_') || k.startsWith('PUBLIC_URL') || k.startsWith('PORT')) {
        define[`process.env.${k}`] = JSON.stringify(process.env[k]);
    }
}

const entryPoints = [path.resolve(__dirname, 'src/index.tsx')]
const outdir = path.resolve(__dirname, 'public/_this/virualDom')
const outfile = path.resolve(__dirname, 'public/_this/virualDom/index.mjs')


fs.emptyDirSync(outdir);

console.time("⚡ [esbuild] Done");
try {
    const buildParams = {
        entryPoints: entryPoints,
        bundle: true,
        metafile: true,
        outfile: outfile,
        format: "esm",
        plugins: [
            cssModulesPlugin({
                v2: false,
                localsConvention: "dashes",
                inject: (cssContent, digest, ...args) => {

                    // console.log('========== digest ==============',args, cssContent)
                    // `console.log("${cssContent}", "${digest}")`
                },
                generateScopedName: (name, filename, css) => {
                    // console.log('sssssssssssssssssssssss', {
                    //     name, filename, css
                    // })

                    let prefix = path.dirname(filename).split('/')
                    prefix = prefix[prefix.length - 1]
                    return `${prefix}_${name}__${cyrb53(css, 2)}`
                },
                generateTsFile: true
            })
        ]
    }

    let result = await esbuild.build(buildParams)
    console.timeEnd("⚡ [esbuild] Done")
    // console.log(result)
} catch (e) {
    console.timeEnd("⚡ [esbuild] Done")
    console.log(e)
    process.exit(1)
}


/*
import esbuild from "esbuild";
import cssModulesPlugin from "esbuild-css-modules-plugin";
import { polyfillNode } from "esbuild-plugin-polyfill-node";
import aliasPlugin from 'esbuild-plugin-path-alias';
import autoprefixer from "autoprefixer";
import sass from "esbuild-sass-plugin";
import path from 'path';
import * as dotenv from 'dotenv'
import copyStaticFiles from "esbuild-copy-static-files";

const buildParams = {
    color: true,
    entryPoints: ['src/index.tsx'],
    loader: { ".js": "jsx", ".json": "json", ".png": "file", ".jpeg": "file", ".jpg": "file", ".svg": "file", ".woff": "file" },
    minify: !isWatch,
    format: "esm",
    bundle: true,
    outfile: './public/_this/virualDom/index.mjs',
    sourcemap: true,
    mainFields : [ 'module' , 'main' ],
    define,
    logLevel: "error",
    incremental: isWatch,
    external: ["*.gif"],
    plugins: [
        polyfillNode({
            process: true,
            buffer: true,
            define
        }),
        cssModulesPlugin({
            localsConvention: "dashes",
            generateScopedName: (name, filename, css) => {
                let prefix = path.dirname(filename).split('/')
                prefix = prefix[prefix.length - 1]
                return `${prefix}_${name}__${cyrb53(css, 2)}`
            },
            generateTsFile: true
        }),
        copyStaticFiles({
            src: './public',
            dest: './build',
            dereference: true,
            errorOnExist: false,
            preserveTimestamps: true,
            recursive: true,
        })
    ]
};

console.time("⚡ [esbuild] Done");
esbuild.build(buildParams).catch((e) => {
    console.error('ERROR ESBUILD', e)
    process.exit(1)
});

 */
