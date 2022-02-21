const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(name, id, email, tmOfficeNumber) {
    super(name, id, email);
    this.title = 'Manager'
    this.tmOfficeNumber = tmOfficeNumber;
  }

  getRole() {
    return this.title;
  }

  getOfficeNumber() {
    return this.tmOfficeNumber;
  }
}
module.exports = Manager;