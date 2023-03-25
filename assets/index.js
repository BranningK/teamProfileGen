
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('utils/generateHTML.js');

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
  

function init(){
    inquirer.prompt(managerInfo)
        .then(function(managerInfo){
            console.log(managerInfo);
            // let result = generateHTML(managerInfo);
            
            // writeToFile("index.html", result);
        })
        .catch(function(error){
            console.log('error: ', error);
    });
};

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