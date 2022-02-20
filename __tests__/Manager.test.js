const Manager = require('../lib/Manager.js');

test('creates a office number object', () => {
    const manager = new Manager('', '', '', '');

    expect(manager.tmOfficeNumber).toEqual(expect.any(String));
  });