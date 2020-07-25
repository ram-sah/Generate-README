//Function to generates the markdown that gets written to the README
function generateReadMe(answers) {

    const badge2 = `[![LanguageCount](https://img.shields.io/github/languages/count/
        ${answers.username}/${answers.repository})](https://github.com/${answers.username}/
            ${answers.repository})`;

    return `  
    
    # ProjectTitle ${answers.projectTitle}    
    ${badge2}
    * Using Node.js, generate a template README.md file with users input.
    
    ## Description 
    ${answers.description}

    ## Table of Contents

    * [ProjectTitle](#projectTitle)

    * [Description](#description)
        
    * [Installation](#install)
                
    * [Usage](#usage)
                
    * [License](#license)
                
    * [Contributing](#contributors)
                
    * [Tests](#tests)
                
    * [Questions](#questions)

    ## Installation

    To install required dependencies, run this command:
    \=========\=
    ${answers.install}
    \=========\=

    ## Usage
    ${answers.usage}
    
    ### Technology Used 
    * [VScode](https://code.visualstudio.com/) - The editor of choice
     
    ## License
    ${answers.license}

    ## Contributors
    ${answers.contributors}

    ## Tests

    To run tests, run the following command:
    \========\=
    ${answers.tests}
    \========\=

    ## Questions
    ${answers.username}
                
<img src="https://github.com/${answers.username}.png" alt="avatar" style="border-radius: 16px" width="30" />
            
If you have any questions Please contact: 
(https://github.com/${answers.username}) directly at ${answers.email}

    ## Repository
    ${answers.repository}

    `
}
module.exports = generateReadMe;