// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [

        {
            name: `projectName`,
            type: `input`,
            message: `What is the name of your project?`,
        },
        {
            name: `description`,
            type: `input`,
            message: `Write a breif description of your project...`,
        },
        {
            name: `use`,
            type: `input`,
            message: `What is the best use for your project?`,
        },
        {
            name: `license`,
            type: `list`,
            message: `Do you need a license for your project?`,
            choices: [`MIT`, `Berkeley Software Distribution (BSD)`, `Apache 2.0`, `None`]
        },
        {
            name: `github`,
            type: `input`,
            message: `What is the Github username?`,
        },

    
];

inquirer.prompt(questions)
.then(answers=>{
    fs.writeFileSync("./dist/README.md",`
# ${answers.projectName}

## Table Of Contents
- [Description](#description)
- [Use](#use)
- [License](#license)
- [Questions](#questions)
## Description
${answers.description}

## Use
${answers.use}

## License
${answers.license}

## Questions
If you have any questions, you can reach me at https://github.com/${answers.github}


    `)
})
