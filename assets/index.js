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