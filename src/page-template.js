const generateTemplate = require('../lib/generate-template.js');
const cardsHTML = [];

const generatePage = teamInfo => {
         // create the html for engineers
    const generateManager = manager => {
        return `
        <div class="card employee-card">
            <div class="title">
            ${manager.getRole()}
            </div>
            <div class="name">
            ${manager.getName()}
            </div>
            <div class="employee-id">
            ${manager.getID()}
            </div>
            <div class="email-address">
            ${manager.getEmail()}
            </div>
            <div class="office-number">
            ${manager.getOfficeNumber()}
            </div>
        </div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="card employee-card">
            <div class="title">
            ${intern.getRole()}
            </div>
            <div class="name">
            ${intern.getName()}
            </div>
            <div class="employee-id">
            ${intern.getID()}
            </div>
            <div class="email-address">
            ${intern.getEmail()}
            </div>
            <div class="school">
            ${intern.getSchool()}
            </div>
        </div>
        `;
    };

     // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
            <div class="title">
            ${engineer.getRole()}
            </div>
            <div class="name">
            ${engineer.getName()}
            </div>
            <div class="employee-id">
            ${engineer.getID()}
            </div>
            <div class="email-address">
            ${engineer.getEmail()}
            </div>
            <div class="github-username">
            ${engineer.getGithub()}
            </div>
        </div>
        `;
    };
    cardsHTML.push(teamInfo
        .filter(employee => employee.getRole() === "Team Manager")
        .map(manager => generateManager(manager)).join('')
    );
    cardsHTML.push(teamInfo
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern)).join('')
    )
    cardsHTML.push(teamInfo
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer)).join('')
    );
    console.log(cardsHTML)
    var HTML = generateTemplate(cardsHTML.join(''))
    return HTML
}

module.exports = generatePage
