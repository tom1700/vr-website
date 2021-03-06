const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: 'file-loader',
                options: {
                  name: '/public/icons/[name].[ext]'
                }
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            "@utils": path.resolve(__dirname, 'src/utils/'),
            "@features": path.resolve(__dirname, 'src/features/'),
        }
    },
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};