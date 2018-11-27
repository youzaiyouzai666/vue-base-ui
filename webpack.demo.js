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
        // app: path.join(__dirname, 'src', 'app.js'),
        example: path.join(__dirname, 'example', 'example.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
        // library: 'videoSDK', // library指定的就是你使用require时的模块名，这里便是require("vueAjaxUpload")
        // libraryTarget: 'umd', //libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。
        // umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
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
        // new CleanWebpackPlugin(['dist']),
        // new webpack.HotModuleReplacementPlugin(),
        // new OpenBrowserPlugin({ url: 'http://localhost:'+port })
    ],
    resolve: {
        alias: { 'vue$': 'vue/dist/vue.common.js' },
        extensions: ['.js', '.vue', '.json'],
    }
};