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

    getRole() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
        };
    }
}
module.exports = Employee;