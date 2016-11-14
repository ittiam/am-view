var exec = require('child_process').execSync;
var webpack = require('webpack');
var path = require('path');
var base = require('./webpack.base');
var pkg = require('../package');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

exec('rm -rf dist/');

base.devtool = false;
base.entry = './examples/main.js';
base.output = {
  path: path.resolve(__dirname, '../dist'),
  filename: 'scripts/example.js'
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
