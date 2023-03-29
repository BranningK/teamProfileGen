
const Employee = require("../lib/Employee")
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');




// let html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Team Profile</title>
//     <link rel="stylesheet" href="./style.css">
//     <link href='https://fonts.googleapis.com/css?family=Noto Sans' rel='stylesheet'>
// </head>

// <header>
//     <h1>Meet the team!</h1>
// </header>

// <body>
//     <div class="divContainer">
//         <div class="managerContainer">
//             <div class="memberHeader">
//                 <h3>${Manager.name}</h3>
//                 <h4>${Manager.role}</h4>
//             </div>
//             <div class="memberInfo">
//                 <h4>ID: 0001</h4>
//                 <h4>Email: <a href="mailto:email@example.com">email@example.com</a></h4>
//                 <h4>Office Number: 7</h4>
//             </div>
//         </div>
//         <div class="memberContainer">
//             <div class="member">
//                 <div class="memberHeader">
//                 <h3>Fred</h3>
//                 <h4>Engineer</h4>
//                 </div>
//                 <div class="memberInfo">
//                     <h4>ID: 0002</h4>
//                     <h4>Email: <a href="mailto:email@example.com">email@example.com</a></h4>
//                     <h4>Github: <a href="asdf">asdf</a></h4>
//                 </div>
//             </div>
//             <div class="member">
//                 <div class="memberHeader">
//                 <h3>Ted</h3>
//                 <h4>Engineer</h4>
//                 </div>
//                 <div class="memberInfo">
//                     <h4>ID: 0003</h4>
//                     <h4>Email: <a href="mailto:email@example.com">email@example.com</a></h4>
//                     <h4>Github: <a href="asdf">asdf</a></h4>
//                 </div>
//             </div>
//             <div class="member">
//                 <div class="memberHeader">
//                 <h3>Ed</h3>
//                 <h4>Engineer</h4>
//                 </div>
//                 <div class="memberInfo">
//                     <h4>ID: 0004</h4>
//                     <h4>Email: <a href="mailto:email@example.com">email@example.com</a></h4>
//                     <h4>Github: <a href="asdf">asdf</a></h4>
//                 </div>
//             </div>
//             <div class="member">
//                 <div class="memberHeader">
//                 <h3>Eddy</h3>
//                 <h4>Intern</h4>
//                 </div>
//                 <div class="memberInfo">
//                     <h4>ID: 0005</h4>
//                     <h4>Email: <a href="mailto:email@example.com">email@example.com</a></h4>
//                     <h4>School: UNC Chapel Hill</h4>
//                 </div>
//             </div>
//         </div>
//     </div>
// </body>

// </html>`

// let generateHTML = function(team){
//     let myTeam = team
//     console.log('Here is team:', myTeam)
//     let result = html;
//     console.log(result)
//     return result;
// }


function generateHTML(team) {
    let html = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./dist/style.css">
      </head>
      <body>
        <header>
          <h1>Team Profile</h1>
        </header>
        <main>
          <div class="divContainer">
            <div class="memberContainer"> 
                ${generateCards(team)}
            </div>
          </div>
        </main>
      </body>
    </html>`;
    return html;
  }
  

  function generateCards(team) {
    let cardsHTML = '';
    for (const employee of team) {
      const role = employee.getRole();
      let cardHTML = `<div class="member">
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
            cardHTML += `   <p>Office Number: ${employee.getOfficeNumber()}</p>`;
            break;
            case 'Engineer':
            cardHTML += `   <p>GitHub: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></p>`;
            break;
            case 'Intern':
            cardHTML += `   <p>School: ${employee.getSchool()}</p>`;
            break;
        }
        cardHTML += `</div></div>`;
        cardsHTML += cardHTML;
    }
    return cardsHTML;
  }
  

module.exports = generateHTML;