import isElement from 'iselement';


// cross-browser way of getting element's style property
function getStyle (element, property) {
  if (window.getComputedStyle) {
    const computed_style = document.defaultView.getComputedStyle(element, null);
    return computed_style.getPropertyValue(property);
  } else if (element.currentStyle) {
    return element.currentStyle[property];
  }
  return null;
}


function checkVisibility (element) {
  const is_displayed = getStyle(element, 'display') !== 'none';
  const is_visible = getStyle(element, 'visibility') !== 'hidden';

  return is_displayed && is_visible;
}


export function isVisible (element) {
  // don't bother with non-element inputs
  if (!isElement(element)) {
    return false;
  }

  // elements that are not inserted into the body are never visible
  if (!document.body || !document.body.contains(element)) {
    return false;
  }

  // test visibility recursively for element and all its parents, until BODY
  while (element && (element !== document.body)) {
    if (!checkVisibility(element)) {
      return false;
    }
    element = element.parentNode;
  }

  return true;
}


export function isVisibleAll (list) {
  for (let i = 0; i < list.length; i++) {
    if (!isVisible(list[i])) {
      return false;
    }
  }
  return true;
}


export function isVisibleAny (list) {
  for (let i = 0; i < list.length; i++) {
    if (isVisible(list[i])) {
      return true;
    }
  }
  return false;
}


export default isVisible;