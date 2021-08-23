const path = require("path");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'public/build'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].css',
        }),
    ]
}
