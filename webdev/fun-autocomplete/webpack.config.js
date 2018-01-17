const path = require('path');
const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');


module.exports = {
    context: __dirname,

    devtool: debug ? "inline-sourcemap" : "source-map",

    entry: {
        'development': __dirname + "/develop/index.js"
    },

    output: {
        path: __dirname + "/develop/dist",
        filename: "[name].min.js"
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            },

            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },

    plugins: []
};
