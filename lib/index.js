'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isVisible = isVisible;
exports.isVisibleAll = isVisibleAll;
exports.isVisibleAny = isVisibleAny;

var _iselement = require('iselement');

var _iselement2 = _interopRequireDefault(_iselement);

var _styleProperties = require('style-properties');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// cross-browser way of getting element's style property
function getStyle(element, property) {
  if (window.getComputedStyle) {
    return (0, _styleProperties.getStyleProperty)(element, property).original;
  } else if (element.currentStyle) {
    return element.currentStyle[property];
  }
  return null;
}

function checkVisibility(element) {
  var is_displayed = getStyle(element, 'display') !== 'none';
  var is_visible = getStyle(element, 'visibility') !== 'hidden';

  return is_displayed && is_visible;
}

function isVisible(element) {
  // don't bother with non-element inputs
  if (!(0, _iselement2.default)(element)) {
    return false;
  }

  // elements that are not inserted into the body are never visible
  if (!document.body || !document.body.contains(element)) {
    return false;
  }

  // test visibility recursively for element and all its parents, until BODY
  while (element && element !== document.body) {
    if (!checkVisibility(element)) {
      return false;
    }
    element = element.parentNode;
  }

  return true;
}

function isVisibleAll(list) {
  for (var i = 0; i < list.length; i++) {
    if (!isVisible(list[i])) {
      return false;
    }
  }
  return true;
}

function isVisibleAny(list) {
  for (var i = 0; i < list.length; i++) {
    if (isVisible(list[i])) {
      return true;
    }
  }
  return false;
}

exports.default = isVisible;