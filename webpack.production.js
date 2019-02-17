const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
mode:'production',
entry: path.join(__dirname, 'src', 'main.js'),
output: {
    filename: 'production-[hash].js',
    path: path.resolve(__dirname, 'dist')
},
module:{
    rules:[        
        {
            test:/\.scss$/,
            use:[miniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader']
        },
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(jpg|png|gif)$/,
            use:[
                {
                    loader: 'file-loader',
                    options:{
                        name: '[name]-production.[ext]'
                    }
                }
            ]
        }
    ]
},
plugins:[
    new cleanWebpackPlugin(['dist']),
    new htmlPlugin({
        template: path.join(__dirname,'src','index.html'),
        minify: {
            collapseWhitespace: true,
            removeComments: true
        }
      }),
    new miniCssExtractPlugin()
]
};