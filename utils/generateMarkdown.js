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

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    ##Table of Contents
   
[Description](#description)
    
[Installation](#installation)
    
[Usage](#usage)
    
[License](#license)
    
[Contributing](#contributing)
    
[Testing](#testing)
    
[Questions](#questions)
    
## Description
    
${descriptions}
    
## Installation
    
${installation}
    
## Usage
    
${usage}
    
## License
    
${license}
    
## Contributing
    
${contribution}

## Testing

${tests}

## Questions

(${username})

${email}`;

module.exports = generateMarkdown;
