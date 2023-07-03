import * as esbuild from 'esbuild'
import * as fs from "fs-extra";
import cssModulesPlugin from "esbuild-css-modules-plugin";
import { polyfillNode } from "esbuild-plugin-polyfill-node";
import aliasPlugin from 'esbuild-plugin-path-alias';
import path from 'path';
import * as dotenv from 'dotenv'
dotenv.config()

const __dirname = path.join(path.dirname(process.argv[1]), './');

const isWatch = process.argv.includes("--watch");

let define = {}

for (const k in process.env) {
    if (k.startsWith('REACT_APP_') || k.startsWith('PUBLIC_URL') || k.startsWith('PORT')) {
        define[`process.env.${k}`] = JSON.stringify(process.env[k]);
    }
}

const config = {
    entryPoints: 'services/welcomebook/src/index.mjs',
    outdir: 'services/welcomebook/src',
    outfile: 'services/welcomebook/src/bundle.mjs'
}



const entryPoints = [path.resolve(__dirname, config.entryPoints)]
const outdir = path.resolve(__dirname, config.outdir)
const outfile = path.resolve(__dirname, config.outfile)


// const entryPoints = [path.resolve(__dirname, '_sandbox/simple-peer/index.js')]
// const outdir = path.resolve(__dirname, '_sandbox/simple-peer')
// const outfile = path.resolve(__dirname, '_sandbox/simple-peer/index.mjs')

// const entryPoints = [path.resolve(__dirname, 'src/index.tsx')]
// const outdir = path.resolve(__dirname, 'public/this/virualDom')
// const outfile = path.resolve(__dirname, 'public/this/virualDom/index.mjs')

//fs.emptyDirSync(outdir);
console.time("⚡ [esbuild] Done");
try {
    const buildParams = {
        entryPoints: entryPoints,
        bundle: true,
        metafile: true,
        outfile: outfile,
        format: "esm",
        define,
        loader: { ".js": "jsx", ".json": "json", ".png": "file", ".jpeg": "file", ".jpg": "file", ".svg": "file", ".woff": "file" },
        color: true,
        minify: true,
        sourcemap: true,
        mainFields : [ 'module' , 'main' ],
        plugins: [
            aliasPlugin({
                '@src': path.resolve(__dirname, './src')
            }),
            polyfillNode({
                process: true,
                buffer: true,
                define
            }),
            cssModulesPlugin({
                v2: true,
                v2CssModulesOption: {
                    dashedIndents: true,
                    /**
                     * Optional. The currently supported segments are:
                     * [name] - the base name of the CSS file, without the extension
                     * [hash] - a hash of the full file path
                     * [local] - the original class name
                     */
                    pattern: `[name]_[local]__[hash]`
                }
            })
        ]
    }

    let result = await esbuild.build(buildParams)
    console.log(result)
    console.timeEnd("⚡ [esbuild] Done")
} catch (e) {
    console.timeEnd("⚡ [esbuild] Done")
    console.log(e)
    process.exit(1)
}