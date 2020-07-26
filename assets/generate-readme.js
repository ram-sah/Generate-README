//Function to generates the markdown that gets written to the README
function generateReadMe(answers) {
    let badge = "No license";
    let license = answers.license
    if (license.split(" ").length >1) {
        license = license.split(" ").join("%20");
    }
if (answers.license !== "None") {
    badge = `[![License: ${license}](https://img.shields.io/badge/License-${license}-green.svg)](https://opensource.org/licenses/${license})`;
}
return `# ProjectTitle: ${answers.projectTitle}

${badge}

## Description

Using Node.js, Generate a template README.md file with users input.\n
${answers.description}

## Table of Contents   

* [Description](#description)
    
* [Installation](#Installation)
            
* [Usage](#usage)
            
* [License](#license)
            
* [Contributing](#contributors)
            
* [Tests](#tests)
            
* [Questions](#questions)

## Installation

To install required dependencies, run this command:
\`\`\`\`
${answers.install}
\`\`\`\`

## Usage

${answers.usage}

### Technology Used 
* [VScode](https://code.visualstudio.com/) - The editor of choice
    
## License

This application is covered under : ${answers.license}

## Contributors

${answers.contributors}

## Tests

To run tests, run the following command:
\`\`\`\`
${answers.tests}
\`\`\`\`

## Questions

${answers.username}
                
<img src="https://github.com/${answers.username}.png" alt="avatar" style="border-radius: 16px" width="30" />
            
If you have any questions you can reach me at: 
(https://github.com/${answers.username}) directly email at: ${answers.email}

## Repository

(https://github.com/${answers.username}/${answers.repository})

    `
}
module.exports = generateReadMe;