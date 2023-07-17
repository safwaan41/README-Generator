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
            choices: [`MIT`, `BSD`,`GPL`,`Apache2`, `None`]
        },
        {
            name: `github`,
            type: `input`,
            message: `What is the Github username?`,
        },
        {
            name: `email`,
            type: `input`,
            message: `What is a good contact email for you?`,
        },

    
];



inquirer.prompt(questions)
.then(answers=>{
    fs.writeFileSync("./dist/README.md",`
# ${answers.projectName}
![badge](https://img.shields.io/badge/license-${answers.license}-blue)


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
If you have any questions, you can reach me at https://github.com/${answers.github} <br/>![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)<br/>
<br/>
or reach out to my email at ${answers.email} <br/>
![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white) <br/>
### [![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

    `)
})
