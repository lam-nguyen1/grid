const meta = require('../sort');

test('should handle empty array', () => {
  const arr = [];
  meta.sort(arr);

  expect(arr.length).toEqual(0);
});

test('should sort elements in ascending order according to their numerical value', () => {
  const arr = [3, 2, 1];
  meta.sort(arr);

  expect(arr).toEqual([1, 2, 3]);
  expect(arr.length).toEqual(3);
});