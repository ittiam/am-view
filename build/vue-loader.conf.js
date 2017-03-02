var utils = require('./utils')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: false,
    extract: isProduction
  })
}
