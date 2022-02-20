const Manager = require('../lib/Manager.js');

test('test create manager object', () => {
  const manager = new Manager('James', '2246', 'test@email.com', '2');

  expect(typeof(manager)).toBe('object')
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
});