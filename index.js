const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
// const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const Questions = require('./lib/questions.js')
teamInfo = []

function addManager() {
    inquirer
        .prompt(Questions.managerQuestions)
        .then(function (answers){
            var manager = new Manager(answers.tmName, answers.tmID, answers.tmEmail, answers.tmOfficeNumber)
            teamInfo.push(manager)
            console.log(manager.name + 'Has been added to the roster')
            console.log(teamInfo)
            areWeDone()
        })
}

function areWeDone() {
    inquirer
        .prompt(Questions.areWeDoneQuestions)
        .then(function (answers){
            if(answers.finishedQ == 'Add intern to roster.'){
                console.log(answers.finishedQ)
            } else if (answers.finishedQ == 'Add engineer to roster.') {
                console.log(answers.finishedQ)
            } else{
                console.log(answers.finishedQ)
            }
        })
}

addManager()
