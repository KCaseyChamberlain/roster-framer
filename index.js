const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'tmname',
            message: "What the team manager’s name? (Required)",
            validate: tmInput => {
                if (tmInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's name!");
                    return false;
                }
            }
        },
    ])
        .then(({ tmname }) => {
            this.employee = new Employee(tmname);
            console.log(tmname);
        });
}


promptUser()