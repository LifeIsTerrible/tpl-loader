const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
module.exports = {
    entry: resolve(__dirname, 'src/app.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'app[hash:16].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tpl$/,
                use: [
                    'babel-loader',
                    {
                        loader: resolve(__dirname,'./loaders/tpl-loader'),
                        options: {
                            log: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        })
    ],
    devServer: {
        port: 8080
    }
}