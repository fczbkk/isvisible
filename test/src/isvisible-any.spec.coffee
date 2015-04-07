describe 'isVisible.any', ->

  beforeEach ->
    for i in [0..3]
      element = document.body.appendChild document.createElement 'aaa'
      element.style.display = 'none'

  afterEach ->
    for element in document.querySelectorAll 'aaa'
      element.parentNode.removeChild element

  it 'should exist', ->
    expect(isVisible.all).toBeDefined()

  it 'should return `true` if at least one item in list is visible', ->
    list = document.querySelectorAll 'aaa'
    list[0].style.display = 'block'
    expect(isVisible.any list).toEqual true

  it 'should return `false` no item in list is visible', ->
    list = document.querySelectorAll 'aaa'
    expect(isVisible.any list).toEqual false
