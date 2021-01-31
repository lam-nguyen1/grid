const dom = require('../dom');

test('create div element', () => {
  const div = dom.element('div');

  expect(div.tagName).toEqual('DIV');
});

test('create div element with class name', () => {
  const div = dom.element('div', { className: 'foo' });

  expect(div.tagName).toEqual('DIV');
  expect(div.className).toEqual('foo');
});

test('create div element with text content', () => {
  const div = dom.element('div', { className: 'foo' }, ['bar']);

  expect(div.tagName).toEqual('DIV');
  expect(div.className).toEqual('foo');
  expect(div.textContent).toEqual('bar');
});

test('create div element with a span element as child', () => {
  const span = dom.element('span', { className: 'baz' }, ['Hello there']);
  const div = dom.element('div', { className: 'foo' }, [span]);

  expect(div.tagName).toEqual('DIV');
  expect(div.className).toEqual('foo');
  expect(div.children[0].tagName).toEqual('SPAN');
  expect(div.children[0].className).toEqual('baz');
  expect(div.children[0].textContent).toEqual('Hello there');
});