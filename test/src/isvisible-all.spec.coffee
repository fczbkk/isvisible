describe 'isVisible.all', ->

  beforeEach ->
    for i in [0..3]
      document.body.appendChild document.createElement 'aaa'

  afterEach ->
    for element in document.querySelectorAll 'aaa'
      element.parentNode.removeChild element

  it 'should exist', ->
    expect(isVisible.all).toBeDefined()

  it 'should return `true` if all items in array are visible', ->
    list = document.querySelectorAll 'aaa'
    expect(isVisible.all list).toEqual true

  it 'should return `true` if all items in collection are visible', ->
    list = document.getElementsByTagName 'aaa'
    expect(isVisible.all list).toEqual true

  it 'should return `false` if at least one item in list is not visible', ->
    list = document.querySelectorAll 'aaa'
    list[0].style.display = 'none'
    expect(isVisible.all list).toEqual false

  it 'should return `false` if list is not array or collection', ->
    expect(isVisible.all 'xxx').toEqual false
    expect(isVisible.all [1, 2, 3]).toEqual false
