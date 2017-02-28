"use strict";
var webpack = require('webpack');
let path = require('path');

module.exports = {
    devtool: 'unline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename:'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions:['','.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders:['react-hot','babel?presets[]=react,presets[]=latest']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
}