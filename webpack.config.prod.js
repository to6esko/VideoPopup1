// command Demo: webpack -p --progress --config webpack.config.prod.js ; cp public/bundle.js ../DidiVisionDemo/bundle.js ; rm -rf ../DidiVisionDemo/img ../DidiVisionDemo/css/; cp -R index.html img css/ ../DidiVisionDemo/; cd ../DidiVisionDemo; git add * ; git commit -am "update"; git push; cd  ../DidiVision

// command Live: cp public/bundle.js ../DidiVisionLive/bundle.js ; rm -rf ../DidiVisionLive/img ../DidiVisionLive/css/; cp -R index.html img css/ ../DidiVisionLive/; cd ../DidiVisionLive; git add * ; git commit -am "update"; git push; cd  ../DidiVision

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