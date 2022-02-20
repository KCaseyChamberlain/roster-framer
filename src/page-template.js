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
            </div>
            <div class="name">
            </div>
            <div class="employee-id">
            </div>
            <div class="email-address">
            </div>
            <div class="school">
            </div>
        </div>
        `;
    };

     // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
            <div class="title">
            </div>
            <div class="name">
            </div>
            <div class="employee-id">
            </div>
            <div class="email-address">
            </div>
            <div class="github-username">
            </div>
        </div>
        `;
    };
    cardsHTML.push(teamInfo
        .filter(employee => employee.getRole() === "Team Manager")
        .map(manager => generateManager(manager))
    );
    cardsHTML.push(teamInfo
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
    )
    cardsHTML.push(teamInfo
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
    );
    console.log(cardsHTML)
    var HTML = generateTemplate(cardsHTML)
    return HTML
}

module.exports = generatePage


//     ${teamInfo[0].name} 
// ${manager.getName()}
