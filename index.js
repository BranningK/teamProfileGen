
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');

//Questions regarding the manager
const managerInfo = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
    },
    {
        type: 'input',
        name: 'managerID',
        message: "What is the team manager's ID?",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email address",
    },
    {
        type: 'input',
        name: 'managerOffice',
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
        name: 'managerID',
        message: "What is the engineer's ID?",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the engineer's email address",
    },
    {
        type: 'input',
        name: 'managerOffice',
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
        name: 'managerID',
        message: "What is the intern's ID?",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the intern's email address",
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "What school is the intern's from?",
    }
]

function init(){
    inquirer.prompt(managerInfo)
        .then(function(managerInfo){
            console.log(managerInfo);
            
            // use our classes to create a MANAER OBJECT INSTANCE
            
            // then we add our manager to our TEAM (ARRAY)
            
            
            // Then lets call our NEXT ASYNC function (prompt)
            addEmployee();
           
            
            // writeToFile("index.html", result);
            // let result = generateHTML(managerInfo);

        })
        .catch(function(error){
            console.log('error: ', error);
        });
        // insert addNew prompt here
    };
    
function addEmployee() {
    
    inquirer.prompt(addNew)
        .then(data => {
            console.log(data);
            // based on the user answer we will create a MANGER , ENGINEER, or INTERN object and add them to the TEAM
                // if/else 
                // switch 
             
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