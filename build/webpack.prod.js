var exec = require('child_process').execSync;
var webpack = require('webpack');
var path = require('path');
var base = require('base');
var pkg = require('../package');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

var loaders = [
  {
    loader: 'css-loader',
    options: {
      modules: true
    }
  }, {
    loader: 'postcss-loader'
  }, {
    loader: 'less-loader'
  }
];

exec('rm -rf dist/');

base.entry.vendor = Object.keys(pkg.dependencies);
base.entry.publicPath = '/public/';

base.devtool = false;
// base.devtool = 'source-map'
base.output.filename = '[name].[chunkhash:8].js';

base.plugins.push([
  new ProgressBarPlugin(),
  new ExtractTextPlugin('styles/[name].[contenthash:8].css'),
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
  // extract vendor chunks
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'scritps/vendor.[chunkhash:8].js'
  })
]);

base.module.rules.push([
  {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract({
      loader: loaders,
      fallbackLoader: 'style-loader'
    })
  }
]);

module.exports = base;
