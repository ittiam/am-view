var webpack = require('webpack');
var base = require('./webpack.base');
var autoprefixer = require('autoprefixer');

var browserOptions = {
  browsers: [
    'ie >= 8',
    'ie_mob >= 10',
    'ff >= 26',
    'chrome >= 30',
    'safari >= 6',
    'opera >= 23',
    'ios >= 5',
    'android >= 2.3',
    'bb >= 10'
  ]
};

var postcss = [autoprefixer(browserOptions)];

// 配置开发服务器
base.devServer = {
  historyApiFallback: true,
  hot: true,
  progress: false,
  colors: true,
  proxy: {}
};

// base.devtool = 'cheap-module-eval-source-map';
base.devtool = 'eval-source-map';

base.plugins.push(
  new webpack.LoaderOptionsPlugin({
    postcss: postcss,
    vue: {
      postcss: postcss
    }
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  // webpack 热替换插件
  // new webpack.HotModuleReplacementPlugin(),
  // 允许错误不打断程序
  new webpack.NoErrorsPlugin()
);

base.module.rules.push(
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    // vue-loader options goes here
    options: {
      loaders: {
        less: {
          use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
        }
      }
    }
  },
  {
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
  }
);

module.exports = base;

