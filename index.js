// TODO: Include packages needed for this application
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input

    function promptInit(){
        return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "link",
            message: "What is the link to your GitHub profile?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your project title?"
        },

      //TOC
        {
            type: "input",
            name: "descriptions",
            message: "What is the descriptions of the project?"
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions?"
        },
        {
            type: "input",
            name: "usage",
            message: "What usage information is there?"
        },
        {
            type: "list",
            name: "license",
            message: "What licenses would you like for your project?",
            choices: [
                "apache2", "bsd2", "bsd3", "cc1", "cc4-international", "cc4-sharealike", "EPL1", "GNU GPLv2", "GNU GPLv3", "MIT", "Unlicense"
            ]
        },
        {
            type: "input",
            name: "contribution",
            message: "What are the contribution guidelines?"
        },
        {
            type: "input",
            name: "tests",
            message: "What are the test instructions?"
        },
    ]).then((answers) => {
        //writeFile to create the readme page
        const markdownContent = generateMarkdown(answers)
        fs.writeFile("README.md", markdownContent, (err)=>
        err? console.log(err) : console.log("Successfully created a README!"))
    })
}



// Function call to initialize app
promptInit();
