var webpack = require('webpack');
var path = require('path');
var base = require('./webpack.base');

// 配置开发服务器
base.devServer = {
  historyApiFallback: true,
  hot: true,
  progress: false,
  colors: true,
  proxy: {},
};

// base.devtool = '#cheap-module-eval-source-map';
base.devtool = 'eval-source-map';

base.plugins.push([
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  // webpack 热替换插件
  // new webpack.HotModuleReplacementPlugin(),
  // 允许错误不打断程序
  new webpack.NoErrorsPlugin()
]);

base.module.loaders.push([
  {
    test: /\.css$/,
    loader: ['style-loader', 'css-loader', 'postcss-loader']
  }, {
    test: /\.less$/,
    loader: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
  }
]);

module.exports = base;

