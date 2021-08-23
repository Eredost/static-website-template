const path = require("path");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        publicPath: '/build/',
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
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].css',
        }),
    ],
    devServer: {
        static: './public',
        host: 'localhost',
        port: '8080',
        open: true,
    }
}
