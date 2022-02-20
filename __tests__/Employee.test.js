const Employee = require('../lib/Employee.js');

test('test create employee object', () => {
    const employee = new Employee('', '', '');

    expect(typeof(employee)).toBe('object')
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
  });

test('test get employee name', () => {
  const expectedName = "casey"
  const employee = new Employee(expectedName);

  var actualName = employee.getName()
  expect(actualName).toEqual(expectedName)
});