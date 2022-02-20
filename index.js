const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const Questions = require('./lib/questions.js')
teamInfo = []
const generatePage = require('./src/page-template.js');
const fs = require('fs');


function addManager() {
    inquirer
        .prompt(Questions.managerQuestions)
        .then(function (answers) {
            var manager = new Manager(answers.tmName, answers.tmID, answers.tmEmail, answers.tmOfficeNumber)
            teamInfo.push(manager)
            console.log(manager.name + ' Has been added to the roster')
            console.log(teamInfo)
            areWeDone()
        })
}

function areWeDone() {
    inquirer
        .prompt(Questions.areWeDoneQuestions)
        .then(function (answers) {
            if (answers.finishedQ == 'Add intern to roster.') {
                console.log(answers.finishedQ)
                addIntern()
            } else if (answers.finishedQ == 'Add engineer to roster.') {
                console.log(answers.finishedQ)
                addEngineer()
            } else {
                console.log(answers.finishedQ)
                createPage(teamInfo)
                copyStyle()
            }
        })
}

function addIntern() {
    inquirer
        .prompt(Questions.internQuestions)
        .then(function (answers) {
            var intern = new Intern(answers.inName, answers.inID, answers.inEmail, answers.inSchool)
            teamInfo.push(intern)
            console.log(intern.name + ' Has been added to the roster')
            console.log(teamInfo)
            areWeDone()
        })
}

function addEngineer() {
    inquirer
        .prompt(Questions.engineerQuestions)
        .then(function (answers) {
            var engineer = new Engineer(answers.enName, answers.enID, answers.enEmail, answers.enGithub)
            teamInfo.push(engineer)
            console.log(engineer.name + ' Has been added to the roster')
            console.log(teamInfo)
            areWeDone()
        })
}

addManager()

function createPage(teamInfo) {
    console.log(teamInfo);
    var page = generatePage(teamInfo);
    fs.writeFile("./dist/index.html", page, err => {
        if (err) {
            return err
        }
        console.log('index.html created!')
    })
}

function copyStyle() {
    fs.copyFile('./src/style-template.css', './dist/style.css', err => {
        if (err) {
            return err
        }
        console.log('style.css copied!')
    })
}