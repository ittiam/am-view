var webpack = require('webpack');
var path = require('path');
var base = require('./webpack.base');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 配置开发服务器
base.devServer = {
  historyApiFallback: true,
  hot: true,
  progress: false,
  colors: true,
  proxy: {}
};

// 定义应用入口
base.entry = './examples/main.js';
base.output = {
  path: path.resolve(__dirname, '../dist'),
  filename: 'example.js'
};
// base.devtool = 'cheap-module-eval-source-map';
base.devtool = 'eval-source-map';

base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  // webpack 热替换插件
  // new webpack.HotModuleReplacementPlugin(),
  // 允许错误不打断程序
  new webpack.NoErrorsPlugin(),
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
        less: 'vue-style-loader!css-loader?sourceMap!postcss-loader!less-loader'
      }
    }
  },
  {
    test: /\.less$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
      },
      {
        loader: 'postcss-loader'
      },
      {
        loader: 'less-loader'
      }
    ]
  }
);

module.exports = base;

