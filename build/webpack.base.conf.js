var path = require('path');
var config = require('../config');
var utils = require('./utils');
var projectRoot = path.resolve(__dirname, '../');
var autoprefixer = require('autoprefixer');
var SpritesmithPlugin = require('./spritesmith');

var env = process.env.NODE_ENV;
var useCssSourceMap = (env === 'development');

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

module.exports = {
  entry: config.entries,
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.less'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      src: path.resolve(__dirname, '../src'),
      assets: path.resolve(__dirname, '../src/assets'),
      components: path.resolve(__dirname, '../src/components')
    }
  },
  // plugins: [ SpritesmithPlugin() ],
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 2048,
          name: utils.assetsPath('img/[name].[hash:8].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:8].[ext]')
        }
      }
    ]
  },
  postcss: function () {
    return [autoprefixer(browserOptions)];
  },
  vue: {
    loaders: utils.cssLoaders({sourceMap: useCssSourceMap})
  }
};
