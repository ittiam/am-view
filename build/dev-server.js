const path = require('path');
const koa = require('koa');
const serve = require('koa-static-server');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf');

function applyExpressMiddleware(fn, req, res) {
  var originalEnd = res.end;

  return function (done) {
    res.end = function () {
      originalEnd.apply(this, arguments);
      done(null, 0);
    };
    fn(req, res, function () {
      done(null, 1);
    });
  }
}

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port;

const app = koa();
const compiler = webpack(webpackConfig);

const devMiddleware = require('koa-webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});

// serve webpack bundle output
app.use(devMiddleware);

function hotMiddleware(compiler) {
  var doIt = require('webpack-hot-middleware')(compiler);
  return function* (next) {
    var ctx = this;
    var runNext = yield applyExpressMiddleware(doIt, ctx.req, ctx.res);
    if (runNext) {
      yield *next;
    }
  };
}

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware(compiler));

if (config.proxy) {
  app.use(require('koa-proxy')(config.proxy));
}

// serve pure static assets
const staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory);
app.use(serve({
  rootDir: './static',
  rootPath: staticPath
}));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + port + '\n');
});
