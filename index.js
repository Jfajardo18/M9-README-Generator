// const fs = require('fs');
// const inquirer = require('inquirer');

import fs from 'fs';
import inquirer from 'inquirer';


//create question prompts
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter project installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter project usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter project contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter project test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose license for your application:',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    },
];
// this is where i will generate the content created by user input
function generateREADME(answers) {
    return `
    # ${answers.title}

    ## Description
    ${answers.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## License
    ${answers.license}

    ## Contributing
    ${answers.contributing}

    ## Tests
    ${answers.tests}

    ## Questions
    ${answers.email}
    ${answers.username}
    `;
}

// finally make a function to prompt the user based on above questions and generate the README
function promptUser() {
    inquirer.prompt(questions)
    .then((answers) => {
        const READMEContent = generateREADME(answers);
        fs.writeFile('README.md', READMEContent, (err) => {
            if (err) {
                console.error('Error writing to README:', err);
            } else {
                console.log('README.md generated successfully!');
            }
        });
    })
    .catch((err) => {
        console.error('Error:', err);
    });
}

promptUser();
