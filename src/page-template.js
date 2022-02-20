const cardsHTML = [];

const generatePage = teamInfo => {
    const generateManager = manager => {
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
            <div class="office-number">
            </div>
        </div>
        `;
    };

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
            <div class="github-username">
            </div>
        </div>
        `;
    };
    cardsHTML.push(teamInfo
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    cardsHTML.push(teamInfo
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
    );
    cardsHTML.push(teamInfo
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
    );
}

module.exports = generatePage

// function generatePage(teamInfo) {
//     return `
//     Manager's Info:
//     ${teamInfo[0].name} 
//     ${teamInfo[0].id} 
//     ${teamInfo[0].email} 
//     ${teamInfo[0].title} 
//     ${teamInfo[0].tmOfficeNumber}
//     `
// }