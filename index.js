// TODO: Include packages needed for this application
const fs = require('fs')
const generateMarkdown = require('generateMarkdown')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = ([
    {
        type: "input",
        name: "title",
        message: "What is your project title"
    },
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
        name: "descriptions",
        message: "What is the descriptions of the project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "What usage information is there?"
    },
    {
        type: "list",
        name: "license",
        choices: [
            new inquirer.Separator(),
            "apache2", "bsd2", "bsd3",
            new inquirer.Separator(),
            "cc1", "cc4-international", "cc4-sharealike",
            new inquirer.Separator(),
            "EPL1", "GNU GPLv2", "GNU GPLv3",
            new inquirer.Separator(
                "MIT", "Unlicense"
            )
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
])
.then(answers => {
//destructered the questions 
    let {
        title,
        username,
        link,
        email,
        descriptions,

        installation,
        usage,
        license,
        contribution,
        tests
    } = answers; 
    let questionDetails = (username || link || email) && (username.length + link.length + email.length)

    let text = `${ title&&title.length?title + "\n====\n":""}
    ${ license&&license.length?licenser.renderLicenseBadge(license) +"\n":""}
    ${ descriptions&&descriptions.length?"Decription\n---\n" + descriptions:""}   
    __TOC__

    ${ installation&&installation.length?"Installation\n---\n"+installation:""}
    ${ usage&&usage.length?"Usage\n---\n"+usage:""}
    ${ license&&license.length?"License\n---\n"+licenser.getText(license):""}
    ${ contribution&&contribution.length?"Contribution\n---\n"+contribution:""}
    ${ tests&&tests.length?"Tests\n---\n"+test:""}

    ${ questionDetails?"Questions\n---\n":""}
    ${ username&&username.length?"What is your Github username?\n\t- It is: "+username+"\n":""}
    ${ link&&link.length?"\n- What is the link to your repositories?\n\t- Click here: ["+link+"]("+link+")\n":""}
    ${ email&&email.length?"\n- What is your email?\n\t- My email is <a href='mailto:"+email+"'>"+email+"</a>.\n":""}`

    text = text.replace(/\n\n\n/gn, "\n")
    text = addTableOfContents(text, descriptions, installation, usage, license, contribution, tests, questionDetails)
    fs.writeFile(filename, text)

    console.group("README Generator")
    console.log(`Written to ${filename}:\n${text}`)
    console.groupEnd()
})

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
