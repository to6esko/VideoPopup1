// command Demo: webpack -p --progress --config webpack.config.prod.js ; cp public/bundle.js ../VideoPopupDemo/bundle.js ; rm -rf ../VideoPopupDemo/img ../VideoPopupDemo/css/; cp -R index.html img css/ ../VideoPopupDemo/; cd ../VideoPopupDemo; git add * ; git commit -am "update"; git push; cd  ../VideoPopup1



"use strict";

let webpack = require("webpack");
let path = require("path");

// get git info from command line
let commitHash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString();

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
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
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=latest']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
            'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
         new webpack.DefinePlugin({
            __COMMIT_HASH__: JSON.stringify(commitHash),
        })
    ]
}