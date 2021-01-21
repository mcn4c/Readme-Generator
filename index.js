// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
let licenseName = "";
let licenseBadge = "";

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
            name: 'uImage',
            message: 'If a screenshot is included, write out the link here',
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
            choices: ['MIT License', 'GNU LGPLv3', 'Mozzilla Public Licensing 2.0'],
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the link to your GitHub profile page?',
        },

    ])
    .then((data) => {

        const filename = "README.md";

        const title = `# ${data.title} \n \n`;
        const description = `## Description \n\n ${data.description}\n\n `;

        const tableOfContents = "## Table of Contents: \n\n *[Installation](#installation) \n *[Usage](#usage)\n *[Contribution](#contribution)\n *[License](#license) \n *[Tests](#tests)\n *[Questions](#questions)\n\n";


        const installation = `## Installation\n\n ${data.installation}\n\n`;

        const usage = `## Usage \n\n ${data.usage}\n\n`;
        const usageImage = `![alt text](${data.uImage})\n\n`;

        const contribution = `## Contribution \n\n ${data.contribution}\n\n`;

        const tests = `## Tests \n\n ${data.test}\n\n`


        function licenseChoice() {

            if (data.license == "MIT License") {
                let licenseName = "MIT License";
                let licenseBadge = "the badge"
                return licenseName;
                return licenseBadge;
            } else if (data.license == "GNU LGPLv3") {
                let licenseName = "GNU LGPLv3";
                let licenseBadge = "the badge";
                return licenseName;
                return licenseBadge;
            } else if (data.license == "Mozilla Public Licensing 2.0") {
                let licenseName = "Mozilla Public Licensing 2.0";
                let licenseBadge = "the badge";
                return licenseName;
                return licenseBadge;
            } else {
                let licenseName = "No license"
                let licenseBadge = null;
                return licenseName;
                return licenseBadge;
            }
        }
        licenseChoice();

        const displayLicense = `## License \n\n ${licenseName}\n\n `
        const displayBadge = ` \t ${licenseBadge} \n`

        const questions = `## Questions \n\n If you have further questions, please email me at: ${data.email}.\n For access to this and my other repositories, please click the following link to my GitHub page: ${data.github}.`




        fs.writeFile(filename, title + displayBadge + description + tableOfContents + installation + usage + contribution + tests + displayLicense + questions, (err) =>
            err ? console.log(err) : console.log('Success!')
        );


    });

// // // TODO: Create a function to initialize app
// // // function init() {}

// // // Function call to initialize app
// // init();