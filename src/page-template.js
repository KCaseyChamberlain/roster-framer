function generatePage(teamInfo){
    return `
    Manager's Info:
    ${teamInfo[0].name} 
    ${teamInfo[0].id} 
    ${teamInfo[0].email} 
    ${teamInfo[0].title} 
    ${teamInfo[0].tmOfficeNumber}
    
    Intern's Info:
    ${teamInfo[1].name}
    ${teamInfo[1].id}
    ${teamInfo[1].email}
    ${teamInfo[1].title}
    ${teamInfo[1].inSchool}

    Engineer's Info:
    ${teamInfo[2].name}
    ${teamInfo[2].id}
    ${teamInfo[2].email}
    ${teamInfo[2].title}
    ${teamInfo[2].enGithub}
    `
}

module.exports = generatePage