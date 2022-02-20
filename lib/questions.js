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
        message: "Are you done building your team roster? (Required)",
        choices: ['I am finished building my team.', 'Add intern to roster.', 'Add engineer to roster.'],
    }, 

]


engineerQuestions = []
internQuestions = []

module.exports = { managerQuestions, engineerQuestions, internQuestions, areWeDoneQuestions };