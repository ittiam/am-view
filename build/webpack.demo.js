var exec = require('child_process').execSync;
var webpack = require('webpack');
var path = require('path');
var base = require('./webpack.base');
var pkg = require('../package');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var utils = require('./utils');

exec('rm -rf dist/');

base.devtool = false;
base.entry = './examples/main.js';
base.output = {
  path: path.resolve(__dirname, '../dist'),
  filename: 'scripts/example.js',
  publicPath: '/am-view/'
};

base.externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter'
};

base.plugins.push(
  new ProgressBarPlugin(),
  new ExtractTextPlugin('styles/style.css'),
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
  }),
  new HtmlWebpackPlugin({
    template: './examples/index.html',
    filename: 'index.html',
    inject: true
  })
);

base.module.rules = base.module.rules.concat(utils.styleLoaders({ sourceMap: false }));

module.exports = base;
