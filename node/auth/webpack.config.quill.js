module.exports = {
    mode: 'development',
    entry: {
        index: `${__dirname}/app.quill.mjs`
    },
    output: {
        path: __dirname + "/docs/static/html/components/component_modules/bundle",
        filename: 'quill.mjs',
        chunkFilename: 'quill.mjs',
        library: 'quill'
    }};
