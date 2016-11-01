// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path');
const fs = require('fs');
const glob = require('glob');

function getEntry(globPath) {
  var entries = {}, basename;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-2);
    pathname = tmp.splice(0, 1) + '/' + basename;

    entries[pathname] = entry;
  });

  return entries;
}

const entries = getEntry('./src/modules/**/*.js');

const pages = getEntry('./src/modules/**/*.ejs');

module.exports = {
  pages,
  entries,
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false
  },
  proxy: {
    host: 'http://www.example.com/'
  },
  dev: {
    env: require('./dev.env'),
    port: 8100
  }
};
