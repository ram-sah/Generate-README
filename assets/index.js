//Declaring the dependencies and variables 
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateReadMe = require("./generate-readme")

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
            name: "description",
        },        
        {
            type: "input",
            message: "What are installation process? Install command ",
            name: "install",
            default: "npm i"
        },
        {
            type: "input",
            message: "How do you use this project?",
            name: "usage"
        },
        {
            type: "list",
            message: "select license for this project",
            name: "license",
            choices: [
                "MIT",
                "GPL 3.0",
                "APACHE 2.0",
                "BSD 3",  
                "None"              
            ]
        },
        {
            type: "input",
            message: "State the name fo contributors",
            name: "contributors"
        },
        {
            type: "input",
            message: "Is there test Incuded?",
            name: "tests",
            default: "npm test"
        },       
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your repository name in GitHub for this project?",
            name: "repository"
        },
    ]);
}

// Function async Inititing - this function kicks everything off
async function init() {    
    promptUser()
        .then((answers) => {
            // console.log(answers)
            const data = generateReadMe(answers);
            console.log(data);
            return writeFileAsync("./generated/README.md", data);
        }).then(() => {
            console.log("README Generate is successful, Check it in generated folder.");
        }).catch(error => console.log(error));
}
init();