const path = require("path");
const config = require('./src/config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');
var CopyWebpackPlugin = require('copy-webpack-plugin');

global.__webpack_base_uri__ = '';

module.exports = {
    entry: {
        index_head: './src/index.ts'
    },
    devtool: 'inline-source-map',
    devServer: {
        publicPath: '/',
        contentBase: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-webpack-loader',
                options: {
                    data: config
                }
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            entities: path.resolve(__dirname, 'src/entities'),
            components: path.resolve(__dirname, 'src/components'),
            config: path.resolve(__dirname, 'src/config.js'),
        },
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/assets',
                    to: 'assets'
                }
            ]
        }),
        new HtmlWebpackPlugin({
            chunks: ["index_head"],
            scriptLoading: 'blocking'
        }),
        new HtmlWebpackInjector()
    ]
};