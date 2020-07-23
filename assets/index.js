//Declaring the dependencies and variables 
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

//Used Prompt to Ask questions to the user and store all the values inside user's data
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the project title?",
            name: "projectTitle",
        },
        {
            type: "input",
            message: "Write brief description of you project",
            name: "Description",
        },
        {
            type: "checkbox",
            message: "Select for your table contents ",
            name: "tableOfContents",
            choices: [
                "Project Title",
                "Description",
                "Installation",
                "Tests",
                "Questions",
                "Usage",
                "Contributing",
                "Licence",
            ]
        },
        {
            type: "input",
            message: "What are installation process? Install command ",
            neme: "install"
        },
        {
            type: "input",
            message: "What is this project use for?",
            name: "usage"
        },
        {
            type: "list",
            message: "select license for this project",
            neme: "license",
            choices: [
                "MIT License",
                "ISC",
                "Apache License 2.0",
                "BSD 3-Clause",
                "Mozilla Public License 2.0",
                "GNU General Public",
                "Eclipse Public License version 2.0"
            ]
        },
        {
            type:"input",
            message: "Provide your License URL.",
            name:"licenseURL"
        },
        {
            type: "input",
            message: "State the name fo contributors",
            name: "contributors"
        },
        {
            type: "input",
            message: "Is there test Incuded?",
            neme: "tests"
        },
        {
            type: "input",
            message: "Is there anybody to be acknowledge",
            neme: "acknowledgements"
        },
                {
            type: "input",
            message: "What is your user GitHub username?",
            name: "username"
        },
    ]);
}


// Function async Inititing
async function init() {
    promptUser()
        .then(() => {
            return writeFileAsync("README.md");
        }).then(() => {
            console.log("README generation was successful.");
        }).catch(error => console.log(error));
}
init();