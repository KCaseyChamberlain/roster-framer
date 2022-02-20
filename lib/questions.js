managerQuestions = [
    {
        type: 'input',
        name: 'tmName',
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
        name: 'tmID',
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
        name: 'tmEmail',
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
    {
        type: 'input',
        name: 'tmOfficeNumber',
        message: "What is the team manager’s office number? (Required)",
        validate: tmOfficeNumber => {
            if (tmOfficeNumber) {
                return true;
            } else {
                console.log("Please enter your team manager's office number!");
                return false;
            }
        }
    },
    
]

areWeDoneQuestions = [
    {
        type: 'list',
        name: 'finishedQ',
        message: "Are you done building your team's roster? (Required)",
        choices: ["I am finished building my team's roster.", 'Add intern to roster.', 'Add engineer to roster.'],
    }, 
]

internQuestions = [
    {
        type: 'input',
        name: 'inName',
        message: "What the intern’s name? (Required)",
        validate: inName => {
            if (inName) {
                return true;
            } else {
                console.log("Please enter your intern's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'inID',
        message: "What the intern’s employee ID? (Required)",
        validate: inID => {
            if (inID) {
                return true;
            } else {
                console.log("Please enter your intern's employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'inEmail',
        message: "What the intern’s email? (Required)",
        validate: inEmail => {
            if (inEmail) {
                return true;
            } else {
                console.log("Please enter your intern's email!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'inSchool',
        message: "What is the team intern's school? (Required)",
        validate: inSchool => {
            if (inSchool) {
                return true;
            } else {
                console.log("Please enter your intern's school!");
                return false;
            }
        }
    },
]


engineerQuestions = [
    {
        type: 'input',
        name: 'enName',
        message: "What the engineer's name? (Required)",
        validate: enName => {
            if (enName) {
                return true;
            } else {
                console.log("Please enter your engineer's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'enID',
        message: "What the engineer's employee ID? (Required)",
        validate: enID => {
            if (enID) {
                return true;
            } else {
                console.log("Please enter your engineer's employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'enEmail',
        message: "What the engineer’s email? (Required)",
        validate: enEmail => {
            if (enEmail) {
                return true;
            } else {
                console.log("Please enter your engineer's email!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'enGithub',
        message: "What is the engineer's GitHub username? (Required)",
        validate: enGithub => {
            if (enGithub) {
                return true;
            } else {
                console.log("Please enter your engineer's GitHub username!");
                return false;
            }
        }
    },
]

module.exports = { managerQuestions, engineerQuestions, internQuestions, areWeDoneQuestions };