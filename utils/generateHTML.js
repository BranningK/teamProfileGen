
const Employee = require("../lib/Employee")
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');




let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="./style.css">
    <link href='https://fonts.googleapis.com/css?family=Noto Sans' rel='stylesheet'>
</head>

<header>
    <h1>Meet the team!</h1>
</header>

<body>
    <div class="divContainer">
        <div class="managerContainer">
            <div class="memberHeader">
                <h3>${myTeam.Manager.getName()}</h3>
                <h4>${Manager.getRole()}</h4>
            </div>
            <div class="memberInfo">
                <h4>ID: 0001</h4>
                <h4>Email: <a href="mailto:email@example.com">email@example.com</a></h4>
                <h4>Office Number: 7</h4>
            </div>
        </div>
        <div class="memberContainer">
            <div class="member">
                <div class="memberHeader">
                <h3>Fred</h3>
                <h4>Engineer</h4>
                </div>
                <div class="memberInfo">
                    <h4>ID: 0002</h4>
                    <h4>Email: <a href="mailto:email@example.com">email@example.com</a></h4>
                    <h4>Github: <a href="asdf">asdf</a></h4>
                </div>
            </div>
            <div class="member">
                <div class="memberHeader">
                <h3>Ted</h3>
                <h4>Engineer</h4>
                </div>
                <div class="memberInfo">
                    <h4>ID: 0003</h4>
                    <h4>Email: <a href="mailto:email@example.com">email@example.com</a></h4>
                    <h4>Github: <a href="asdf">asdf</a></h4>
                </div>
            </div>
            <div class="member">
                <div class="memberHeader">
                <h3>Ed</h3>
                <h4>Engineer</h4>
                </div>
                <div class="memberInfo">
                    <h4>ID: 0004</h4>
                    <h4>Email: <a href="mailto:email@example.com">email@example.com</a></h4>
                    <h4>Github: <a href="asdf">asdf</a></h4>
                </div>
            </div>
            <div class="member">
                <div class="memberHeader">
                <h3>Eddy</h3>
                <h4>Intern</h4>
                </div>
                <div class="memberInfo">
                    <h4>ID: 0005</h4>
                    <h4>Email: <a href="mailto:email@example.com">email@example.com</a></h4>
                    <h4>School: UNC Chapel Hill</h4>
                </div>
            </div>
        </div>
    </div>
</body>

</html>`

let generateHTML = function(data){
    let myTeam = data
    console.log('Here is team:', team)
    let result = html;
    console.log(result)
    return result;
}

module.exports = generateHTML;