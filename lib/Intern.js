const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(name, id, email, inSchool) {
    super(name, id, email);
    this.title = 'Intern'
    this.inSchool = inSchool;
  }
}

module.exports = Intern;