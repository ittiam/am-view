var webpack = require('webpack');
var merge = require('webpack-merge');
var dev = require('./dev');
var path = require('path');
var base = require('base');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

exec('rm -rf dist/');

var pkg = require('../package');

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

base.module.loaders.push([
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
      loader: 'css-loader!postcss-loader',
      fallbackLoader: 'style-loader'
    })
  },
  {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract({
      loader: 'css-loader!postcss-loader!less-loader',
      fallbackLoader: 'style-loader'
    })
  }
]);

// extract css in single-file components
base.vue.loaders.css = ExtractTextPlugin.extract({
  loader: 'css-loader',
  fallbackLoader: 'vue-style-loader'
});

base.vue.loaders.less = ExtractTextPlugin.extract({
  loader: 'css-loader!less-loader',
  fallbackLoader: 'vue-style-loader'
});

module.exports = base;
