const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'public')
    }
}
