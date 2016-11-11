var exec = require('child_process').execSync;
var webpack = require('webpack');
var path = require('path');
var base = require('./webpack.base');
var pkg = require('../package');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

exec('rm -rf dist/');

base.entry.vendor = Object.keys(pkg.dependencies);

base.devtool = false;
// base.devtool = 'source-map'
base.output.filename = 'scripts/[name].[chunkhash:8].js';
base.output.publicPath = '/static/';

base.plugins.push(
  new ProgressBarPlugin(),
  new ExtractTextPlugin('styles/[name].[contenthash:8].css'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
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
  // extract vendor chunks
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'scripts/vendor.[chunkhash:8].js'
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
