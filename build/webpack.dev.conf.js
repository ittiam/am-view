const config = require('../config');
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development'
const webpack = require('webpack');
const merge = require('webpack-merge');
const utils = require('./utils');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

const plugins = Object.keys(config.pages).map(function (name) {
  var conf = {
    filename: `${name}.html`,
    template: config.pages[name],
    inject: true,
    chunks: []
  };

  if (name in config.entries) {
    conf.chunks = [name];
  }
  return new HtmlWebpackPlugin(conf);
});

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({sourceMap: true})
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ].concat(plugins)
});
