const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const {port} = require('./config.js')

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app: path.join(__dirname, 'src', 'app.js'),
        example: path.join(__dirname, 'example', 'example.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.vue$/, loader: 'vue-loader', options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './example/index.html',to:'./index.html'}
        ], {}),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:'+port })
    ],
    resolve: {
        alias: { 'vue$': 'vue/dist/vue.common.js' },
        extensions: ['.js', '.vue', '.json'],
    }
};