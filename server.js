/**
 * Created by CAOYI on 2018/1/8.
 */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const WebpackConfig = require('./webpack.config');
const path = require('path');
const config = require('./config.js')


const app = express();
const compiler = webpack(WebpackConfig);

app.use(webpackHotMiddleware(compiler));

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/dist/',
    //控制输出
    stats: {
        colors: true,
        chunks: false
    }
}));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,'example' ,'index.html'));
  });

app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || config.port || 3000
module.exports = app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})