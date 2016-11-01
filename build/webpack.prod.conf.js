'use strict';

const path = require('path');
const config = require('../config');
const utils = require('./utils');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env;

const chunks = Object.keys(config.entries);

let commonChunks = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: function (module) {
    // any required modules inside node_modules are extracted to vendor
    return (
      module.resource &&
      module.resource.indexOf(
        path.join(__dirname, '../node_modules')
      ) === 0
    );
  }
});

if (chunks.length > 1) {
  commonChunks = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    chunks,
    minChunks: chunks.length
  });
}

const plugins =  Object.keys(config.pages).map(function (name) {
  var conf = {
    filename: `${name}.html`,
    template: config.pages[name],
    inject: true,
    minify: false,
    chunksSortMode: 'dependency',
    chunks: []
  }

  if (name in config.entries) {
    conf.chunks = ['vendor', name];
  }

  return new HtmlWebpackPlugin(conf);
});

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('scripts/[name].[chunkhash:8].js'),
    chunkFilename: utils.assetsPath('scripts/[id].[chunkhash:8].js')
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    commonChunks,
    // extract css into its own file
    new ExtractTextPlugin(utils.assetsPath('styles/[name].[contenthash:8].css'))
  ].concat(plugins)
});
