// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const licenseChoice = require("./generateMarkdown")

// TODO: Create an array of questions for user input
inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: 'What is the name of your web app?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your web app.',
        },

        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Give some instructions and examples for how to use this web app',
        },

        {
            type: 'input',
            name: 'contribution',
            message: 'Provide guidelines on how other developers can contribute to your web app',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Describe how to run tests for your  program.',
        },

        {
            type: 'list',
            message: 'Please choose a license',
            name: 'license',
            choices: ['MIT License', 'GNU LGPLv3', 'Mozzilla Public Licensing 2.0', 'Apache 2.0'],
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },

    ])
    .then((data) => {

        const filename = "sampleREADME.md";

        const title = `# ${data.title} \n \n`;
        const description = `## Description \n\n ${data.description}\n\n `;

        const tableOfContents = "## Table of Contents: \n\n *[Installation](#installation)  *[Usage](#usage)\n *[Contribution](#contribution) *[License](#license) *[Tests](#tests) *[Questions](#questions)\n\n";


        const installation = `## Installation\n\n ${data.installation}\n\n`;

        const usage = `## Usage \n\n ${data.usage}\n\n`;

        const contribution = `## Contribution \n\n ${data.contribution}\n\n`;

        const tests = `## Tests \n\n ${data.test}\n\n`

        const questions = `## Questions \n\n If you have further questions, please email me at: ${data.email}.\n For access to this and my other repositories, please click the following link to my GitHub page: https://github.com/${data.github}. \n\n`

        // console.log(data.license);

        const licenseSection = licenseChoice.renderLicenseSection(data.license);

        const licenseLink = licenseChoice.renderLicenseLink(data.license);

        const badge = licenseChoice.renderLicenseBadge(data.license);




        fs.writeFile(filename, badge + title + description + tableOfContents + installation + usage + contribution + tests + questions + licenseSection + licenseLink, (err) =>
            err ? console.log(err) : console.log('Readme complete!')
        );


    });

// // // TODO: Create a function to initialize app
// // // function init() {}

// // // Function call to initialize app
// // init();