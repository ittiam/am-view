
/**
 * Array type check.
 *
 * @param {*} obj
 * @return {Boolean}
 */

export const isArray = Array.isArray

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {*} obj
 * @return {Boolean}
 */

export function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}


/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString
var OBJECT_STRING = '[object Object]'
export function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

var FUNCTION_STRING = '[object Function]'
export function isFunction(obj) {
  return toString.call(obj) === FUNCTION_STRING
}

/**
 * Mix properties into target object.
 *
 * @param {Object} to
 * @param {Object} from
 */

export function extend (to, from) {
  var keys = Object.keys(from)
  var i = keys.length
  while (i--) {
    to[keys[i]] = from[keys[i]]
  }
  return to
}


/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([a-z\d])([A-Z])/g
export function hyphenate (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
}

/**
 * Camelize a hyphen-delmited string.
 *
 * @param {String} str
 * @return {String}
 */

var camelizeRE = /-(\w)/g
export function camelize (str) {
  return str.replace(camelizeRE, toUpper)
}

function toUpper (_, c) {
  return c ? c.toUpperCase() : ''
}

/**
 * Manual indexOf because it's slightly faster than
 * native.
 *
 * @param {Array} arr
 * @param {*} obj
 */

export function indexOf (arr, obj) {
  var i = arr.length
  while (i--) {
    if (arr[i] === obj) return i
  }
  return -1
}
