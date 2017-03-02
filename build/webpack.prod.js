var exec = require('child_process').execSync;
var webpack = require('webpack');
var path = require('path');
var base = require('./webpack.base');
var pkg = require('../package');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var utils = require('./utils');

exec('rm -rf lib/');

base.devtool = false;
// base.devtool = 'source-map'
base.entry = './src/main.js';
// 定义输出
base.output = {
  path: path.resolve(__dirname, '../lib'),
  filename: 'am-view.js',
  libraryTarget: 'umd'
};

base.externals = {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
};

base.plugins.push(
  new ProgressBarPlugin(),
  new ExtractTextPlugin('am-view.css'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  })
);

base.module.rules = base.module.rules.concat(utils.styleLoaders({ sourceMap: false, extract: true }));

module.exports = base;
