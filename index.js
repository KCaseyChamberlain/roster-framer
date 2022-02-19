const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'tmname',
            message: "What the team manager’s name? (Required)",
            validate: tmName => {
                if (tmName) {
                    return true;
                } else {
                    console.log("Please enter your team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tmid',
            message: "What the team manager’s employee ID? (Required)",
            validate: tmID => {
                if (tmID) {
                    return true;
                } else {
                    console.log("Please enter your team manager's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tmemail',
            message: "What the team manager’s email? (Required)",
            validate: tmEmail => {
                if (tmEmail) {
                    return true;
                } else {
                    console.log("Please enter your team manager's email!");
                    return false;
                }
            }
        },
    ])        
    .then(({ tmname, tmid, tmemail }) => {
        this.employee = new Employee(tmname, tmid, tmemail);
        console.log(this.employee.getName());
        console.log(this.employee.getID());
        console.log(this.employee.getEmail());
        console.table(this.employee.getRole());
    })
}

promptUser()