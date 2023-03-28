
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');
const { text } = require('stream/consumers');
const Employee = require("./lib/Employee")
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


let team = []
//Questions regarding the manager
const managerInfo = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email address",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
    }
];

const addNew = {
        type: "list",
        name: "addNew",
        message: "Would you like to add another team member?",
        choices: ["Add engineer", "Add intern", "Finish team"]
    }


const addEngineer = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's Github username?",
    }
]

const addIntern = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address",
    },
    {
        type: 'input',
        name: 'school',
        message: "What school is the intern's from?",
    }
]

function init(){
    inquirer.prompt(managerInfo)
        .then(function(managerInfo){
            console.log(managerInfo);
            
            // use our classes to create a MANAGER OBJECT INSTANCE
            const newManager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber)
            // then we add our manager to our TEAM (ARRAY)
            team.push(newManager);
            // Then lets call our NEXT ASYNC function (prompt)
            addEmployee();
        })
        .catch(function(error){
            console.log('error: ', error);
        });
        // insert addNew prompt here
    };
    
function addEmployee() {
    
    inquirer.prompt(addNew)
        .then(data => {
            // based on the user answer we will create a MANGER , ENGINEER, or INTERN object and add them to the TEAM
            switch (data.addNew) {
                case 'Add engineer':
                    inquirer.prompt(addEngineer)
                        .then(data =>{
                            console.log(data);
                            const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
                            team.push(newEngineer);
                            addEmployee();
                        })
                        .catch(function(error){
                            console.log('error: ', error);
                        });
                    break;
                case "Add intern":
                    inquirer.prompt(addIntern)
                        .then(data =>{
                            console.log(data);
                            const newIntern = new Intern(data.name, data.id, data.email, data.school);
                            team.push(newIntern);
                            addEmployee();
                        })
                        .catch(function(error){
                            console.log('error: ', error);
                        });
                    break;
                case "Finish team":
                    console.log(team);


                    let result = generateHTML(team);
                    // console.log(result);
                    // writeToFile("test.html", result);
                    


                    break;
                default:
                    console.log('something isnt right');
            }
        })
        .catch(err => {
            throw err; 
        });
} 

function writeToFile(fileName, data) {
    console.log("Filename: ", fileName);
    console.log("Data: ", data);

    fs.writeFile(fileName, data, function(error) {
        if(error) {
            console.log("error: ", error);
            throw error;
        }
        console.log("Files Saved Successfully");
    });
}



// Starts the app
init();