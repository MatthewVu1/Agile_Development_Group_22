const scripts = require('./scripts/scripts');
console.error = jest.fn()

test('delete function', () => {
  var notelist = [{title: '05/12/2021', body: '123kg'}]
  expect(scripts.delete_weight('05/12/2021')).toStrictEqual([{title: '', body: ''}]);
});