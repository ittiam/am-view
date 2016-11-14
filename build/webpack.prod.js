var exec = require('child_process').execSync;
var webpack = require('webpack');
var path = require('path');
var base = require('./webpack.base');
var pkg = require('../package');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

exec('rm -rf lib/');

base.devtool = false;
// base.devtool = 'source-map'
base.entry = './src/main.js';
// 定义输出
base.output = {
  path: path.resolve(__dirname, '../lib'),
  filename: 'index.js'
};

base.plugins.push(
  new ProgressBarPlugin(),
  new ExtractTextPlugin('style.css'),
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

base.module.rules.push(
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        less: ExtractTextPlugin.extract({
          loader: 'css-loader!postcss-loader!less-loader',
          fallbackLoader: 'vue-style-loader'
        })
      }
    }
  },
  {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract({
      loader: [{ loader: 'css-loader' }, { loader: 'postcss-loader' }, {loader: 'less-loader'}],
      fallbackLoader: 'style-loader'
    })
  }
);

module.exports = base;
