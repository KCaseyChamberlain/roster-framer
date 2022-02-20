const cardsHTML = [];

const generatePage = teamInfo => {
         // create the html for engineers
    const generateManager = manager => {
        return `
        <div class="card employee-card">
            <div class="title">
            </div>
            <div class="name">
            ${manager.getName()}
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
    return cardsHTML.join('')
}

module.exports = generatePage


//     ${teamInfo[0].name} 
