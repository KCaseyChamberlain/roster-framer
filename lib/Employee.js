class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName() {
        return `Employee name: ${this.name}!`;
    }

    getID() {
        return `Employee ID: ${this.id}!`;
    }

    getEmail() {
        return `Employee's email: ${this.email}!`;
    }

    // getRole() 'Return's Employee`
}
module.exports = Employee;