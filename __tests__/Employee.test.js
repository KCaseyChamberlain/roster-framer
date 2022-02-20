const Employee = require('../lib/Employee.js');

test('test create employee object', () => {
    const employee = new Employee('', '', '');

    expect(typeof(employee)).toBe('object')
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
  });

test('test get employee name', () => {
  const expectedName = "john"
  const employee = new Employee('john', '2246', 'test@email.com');

  var actualName = employee.getName()
  expect(actualName).toEqual(expectedName)
});