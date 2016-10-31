/**
 * https://github.com/madrobby/zepto/blob/master/src/fx.js
 */

import {
  isFunction,
  isPlainObject
} from './lang';

import style from './style';

var prefix = '', eventPrefix,
  vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
  testEl = document.createElement('div'),
  supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
  transform,
  transitionProperty, transitionDuration, transitionTiming, transitionDelay,
  animationName, animationDuration, animationTiming, animationDelay,
  cssReset = {}

function dasherize(str) { return str.replace(/([A-Z])/g, '-$1').toLowerCase() }
function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : name.toLowerCase() }

if (testEl.style.transform === undefined) {
  for (var vendor in vendors) {
    var event = vendors[vendor];
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-'
      eventPrefix = event
      break;
    }
  }
}

transform = prefix + 'transform'
cssReset[transitionProperty = prefix + 'transition-property'] =
cssReset[transitionDuration = prefix + 'transition-duration'] =
cssReset[transitionDelay    = prefix + 'transition-delay'] =
cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
cssReset[animationName      = prefix + 'animation-name'] =
cssReset[animationDuration  = prefix + 'animation-duration'] =
cssReset[animationDelay     = prefix + 'animation-delay'] =
cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

var fx = {
  off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
  speeds: 300,
  cssPrefix: prefix,
  transitionEnd: normalizeEvent('TransitionEnd'),
  animationEnd: normalizeEvent('AnimationEnd')
}

function addEventListener(node, eventName, cb) {
  node.addEventListener(eventName, cb, false);
}

function removeEventListener(node, eventName, cb) {
  node.removeEventListener(eventName, cb, false);
}

export function animate(node, properties, duration, ease, callback, delay){
  if (isFunction(duration))
    callback = duration, ease = undefined, duration = undefined
  if (isFunction(ease))
    callback = ease, ease = undefined
  if (isPlainObject(duration))
    ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration
  if (duration) duration = (typeof duration == 'number' ? duration :
                  (fx.speeds[duration] || fx.speeds)) / 1000
  if (delay) delay = parseFloat(delay) / 1000
  return anim(node, properties, duration, ease, callback, delay)
}

function anim(node, properties, duration, ease, callback, delay){
  var key, cssValues = {}, cssProperties, transforms = '',
      wrappedCallback, endEvent = fx.transitionEnd,
      fired = false

  if (duration === undefined) duration = fx.speeds / 1000
  if (delay === undefined) delay = 0
  if (fx.off) duration = 0

  if (typeof properties == 'string') {
    // keyframe animation
    cssValues[animationName] = properties
    cssValues[animationDuration] = duration + 's'
    cssValues[animationDelay] = delay + 's'
    cssValues[animationTiming] = (ease || 'linear')
    endEvent = fx.animationEnd
  } else {
    cssProperties = []
    // CSS transitions
    for (key in properties)
      if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
      else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

    if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
    if (duration > 0 && typeof properties === 'object') {
      cssValues[transitionProperty] = cssProperties.join(', ')
      cssValues[transitionDuration] = duration + 's'
      cssValues[transitionDelay] = delay + 's'
      cssValues[transitionTiming] = (ease || 'linear')
    }
  }

  wrappedCallback = function(event){
    if (typeof event !== 'undefined') {
      if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
      removeEventListener(event.target, endEvent, wrappedCallback)
    } else
      removeEventListener(node, endEvent, wrappedCallback) // triggered by setTimeout

    fired = true
    style.update(node, cssReset)
    callback && callback(node)
  }
  if (duration > 0){
    addEventListener(node, endEvent, wrappedCallback)
    // transitionEnd is not always firing on older Android phones
    // so make sure it gets fired
    setTimeout(function(){
      if (fired) return
      wrappedCallback.call(node)
    }, ((duration + delay) * 1000) + 25)
  }

  // trigger page reflow so new elements can animate
  node.clientLeft

  style.update(node, cssValues)

  if (duration <= 0) setTimeout(function() {
    wrappedCallback.call(node)
  }, 0)
}

testEl = null

