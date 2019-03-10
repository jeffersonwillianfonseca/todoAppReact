const webpack = require('webpack')
const ExtractTextPĺugin = require('extract-text-webpack-plugin')

module.export = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            mudules: __dirname + '/node_modules'
        },
        puglins: [
            new ExtractTextPĺugin('app.css')
        ],
        module: {
            loaders: [{
                test: /.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }, {
                test: /\.css$/,
                loader: ExtractTextPĺugin.extract('style-loader', 'css-loader')
            }, {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                loader: 'file'
            }]
        }
    }
}