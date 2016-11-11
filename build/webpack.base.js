var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var env = process.env.NODE_ENV;
var minimize = (env === 'production');

var autoprefixer = require('autoprefixer');
var browserOptions = {
  browsers: [
    'ie_mob >= 10',
    'ff >= 26',
    'chrome >= 30',
    'safari >= 6',
    'ios >= 6',
    'android >= 2.3'
  ]
};

module.exports = {
  // 定义应用入口
  entry: {
    app: path.resolve(__dirname, '../src/main.js')
  },
  // 定义输出
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  resolveLoader: {
    modules: ['node_modules']
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    alias: {
      views: path.resolve(__dirname, '../src/views'),
      components: path.resolve(__dirname, '../src/components'),
      assets: path.resolve(__dirname, '../src/assets')
    },
    // 约定省略后缀
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/]
      }, {
        test: /\.(woff|svg|ttf|eot)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:8].[ext]'
        }
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 4096,
          name: 'images/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.less$/,
      options: {
        postcss: [
          autoprefixer(browserOptions)
        ]
      }
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.vue$/,
      vue: {
        postcss: [
          autoprefixer(browserOptions)
        ]
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: true
    })
  ]
};
