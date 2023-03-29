
const Employee = require("../lib/Employee")
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateHTML(team) {
    let html = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Team Profile</title>
            <link rel="stylesheet" href="./dist/style.css">
            <link href='https://fonts.googleapis.com/css?family=Noto Sans' rel='stylesheet'>
        </head>
        <body>
            <header>
                <h1>Team Profile</h1>
            </header>
            <main>
                <div class="divContainer">
                    <div class="memberContainer"> 
                        ${generateMembers(team)}
                    </div>
                </div>
            </main>
        </body>
    </html>`;
    return html;
};
  

function generateMembers(team) {
    let membersHTML = '';
    for (const employee of team) {
      const role = employee.getRole();
      let memberHTML = `<div class="member">
                            <div class="memberHeader">
                                <h2>${employee.getName()}</h2>
                                <h3>${role}</h3>
                            </div>
                            <div class="memberInfo">
                                <p>ID: ${employee.getId()}</p>
                                <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                            `;
        switch (role) {
            case 'Manager':
            memberHTML += `    <p>Office Number: ${employee.getOfficeNumber()}</p>`;
            break;
            case 'Engineer':
            memberHTML += `    <p>GitHub: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></p>`;
            break;
            case 'Intern':
            memberHTML += `    <p>School: ${employee.getSchool()}</p>`;
            break;
        }
        memberHTML += `
                            </div>
                        </div>
                        `;
        membersHTML += memberHTML;
    }
    return membersHTML;
}
  

module.exports = generateHTML;