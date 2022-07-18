// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
       
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, descriptions, usage, installation, license, contribution, tests, username, email,}) =>
`# ${title}

[License](#license)

##Table of Contents
    
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Contributing](#contributing)

[Testing](#testing)

[Questions](#questions)

##Description

${descriptions}

##Installation

${installation}

##Usage

${usage}

## License

${license}

##Contributing

${contribution}

##Testing

${tests}

##Questions

GitHub: (${username})

Email: ${email}`;


module.exports = generateMarkdown;
