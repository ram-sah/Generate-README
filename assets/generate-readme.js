//Function to generates the markdown that gets written to the README
function generateReadMe(answers) {
    return `
    # Generate-README.md
    Using Node.js, generate a template README.md file with users input.
    ${answers.projectTitle}

    ## Description 
    ${answers.description}

    ## Table of Content
    ${answers.tableOfContents}

    ## Installation
    ${answers.install}

    ## Usage
    ${answers.usage}
    
    ### Technology Used 
    * [VScode](https://code.visualstudio.com/) - The editor of choice
     
    ## License
    ${answers.license}

    ## Contributors
    ${answers.contributors}

    ## Tests
    ${answers.tests}

    ## Username
    ${answers.username}

    ## Repository
    ${answer.repository}

    `   
}