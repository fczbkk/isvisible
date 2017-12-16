import {isVisible, isVisibleAll, isVisibleAny} from './../src/index';


describe('meta', function() {

  it('should exist', function() {
    expect(isVisible).toBeDefined();
    expect(isVisibleAll).toBeDefined();
    expect(isVisibleAny).toBeDefined();
  });

});


describe('isVisible', function() {
  
  let elm;

  beforeEach(function() {
    elm = document.body.appendChild(document.createElement('div'));
  });

  afterEach(function() {
    if (elm && elm.parentNode) {
      elm.parentNode.removeChild(elm);
    }
  });

  it('should say regular element is visible', function() {
    expect(isVisible(elm)).toEqual(true);
  });

  it('should say not displayed element is not visible', function() {
    elm.style.display = 'none';
    expect(isVisible(elm)).toEqual(false);
  });

  it('should say hidden element is not visible', function() {
    elm.style.visibility = 'hidden';
    expect(isVisible(elm)).toEqual(false);
  });

  it('should say element with 0 opacity is not visible', function() {
    elm.style.opacity = 0;
    expect(isVisible(elm)).toEqual(false);
  });

  it('should say visible element in hidden parent is visible', function () {
    const child = elm.appendChild(document.createElement('div'));
    elm.style.visibility = 'hidden';
    child.style.visibility = 'visible';
    expect(isVisible(child)).toEqual(true);
  });

  it('should say non-existing element is not visible', function() {
    elm.parentNode.removeChild(elm);
    expect(isVisible(elm)).toEqual(false);
  });

  it('should say falsy object is not visible', function() {
    expect(isVisible(null)).toEqual(false);
  });

  it('should say detached element is not visible', function() {
    elm = document.createElement('div');
    expect(isVisible(elm)).toEqual(false);
  });

  it('should say child element of hidden element is not visible', function() {
    const sub_elm = elm.appendChild(document.createElement('div'));
    elm.style.display = 'none';
    expect(isVisible(sub_elm)).toEqual(false);
  });

  it('should say child element of an element with 0 opacity is not visible', function() {
    const sub_elm = elm.appendChild(document.createElement('div'));
    elm.style.opacity = 0;
    expect(isVisible(sub_elm)).toEqual(false);
  });

});



describe('isVisibleAny', function() {

  beforeEach(function() {
    for (let i = 0; i < 3; i++) {
      const elm = document.body.appendChild(document.createElement('aaa'));
      elm.style.display = 'none';
    }
  });

  afterEach(function() {
    let test_element;
    while (test_element = document.querySelector('aaa')) {
      test_element.parentNode.removeChild(test_element);
    }
  });

  it('should `true` if at least one item in list is visible', function() {
    const list = document.querySelectorAll('aaa');
    list[0].style.display = 'block';
    expect(isVisibleAny(list)).toEqual(true);
  });

  it('should `false` no item in list is visible', function() {
    const list = document.querySelectorAll('aaa');
    list[0].style.display = 'none';
    expect(isVisibleAny(list)).toEqual(false);
  });

});


describe('isVisibleAll', function() {

  beforeEach(function() {
    for (let i = 0; i < 3; i++) {
      document.body.appendChild(document.createElement('aaa'));
    }
  });

  afterEach(function() {
    let test_element;
    while (test_element = document.querySelector('aaa')) {
      test_element.parentNode.removeChild(test_element);
    }
  });

  it('should `true` if all items in array are visible', function() {
    const list = document.querySelectorAll('aaa');
    expect(isVisibleAll(list)).toEqual(true);
  });

  it('should `true` if all items in collection are visible', function() {
    const list = document.getElementsByTagName('aaa');
    expect(isVisibleAll(list)).toEqual(true);
  });

  it('should `false` if at least one item in list is not visible', function() {
    const list = document.querySelectorAll('aaa');
    list[0].style.display = 'none';
    expect(isVisibleAll(list)).toEqual(false);
  });

  it('should `false` if list is not array or collection', function() {
    expect(isVisibleAll('xxx')).toEqual(false);
    expect(isVisibleAll([1, 2, 3])).toEqual(false);
  });

});