const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, enGithub) {
        super(name, id, email);
        this.title = 'Engineer'
        this.enGithub = enGithub;
    }

    getGithub() {
        return this.enGithub;
    }

    getRole() {
        return this.title;
    }
}

module.exports = Engineer;