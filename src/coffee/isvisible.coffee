getStyle = (element, property) ->
  # old versions of IE
  if element.currentStyle
    element.currentStyle[property]

  # modern browsers
  else if window.getComputedStyle
    document.defaultView.getComputedStyle element, null
      .getPropertyValue property

  else
    null


# test visibility of element
checkVisibility = (element) ->
  is_displayed = getStyle(element, 'display') isnt 'none'
  is_visible = getStyle(element, 'visibility') isnt 'hidden'

  is_displayed and is_visible


# check if element is visible
# this should be as universal and cross-browser compatible as possible up to IE8
isVisible = (element) ->

  # don't even bother checking elements that do not exist or are not in BODY
  unless document.body?.contains element
    return false

  # test visibility recursively for element and all its parents, until BODY
  while element? and element isnt document.body
    unless checkVisibility element
      return false
    element = element.parentNode

  true

isVisible.all = (list) ->
  for item in list
    return false unless @ item
  true


isVisible.any = (list) ->
  for item in list
    return true if @ item
  false


# export to global namespace
if expose?
  expose isVisible, 'isVisible'
else
  window.isVisible = isVisible
