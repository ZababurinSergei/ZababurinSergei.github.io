module.exports = {
    mode: 'development',
    entry: {
        index: `${__dirname}/app.octokit.mjs`
    },
    output: {
        path: __dirname + "/docs/static/html/components/component_modules/github",
        filename: 'Octokit.mjs',
        chunkFilename: 'Octokit.mjs',
        library: 'github'
    }
};
