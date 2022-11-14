function generateReadme(answr) {
    return `

## Title
${answr.title}
${answr.getLic}

## Description
${answr.description}

## Table of Contents
- [Description](#description)
- [Installation](#-Installation)
- [Usage](#-Usage)
- [License](#-Installation)
- [Contributing](#-Contributing)
- [Tests](#-Tests)
- [Questions](#-Contact-Information)
    
## Installation
${answr.installation}

## Usage
${answr.usage}

## License
${answr.license}

## Contributing
${answr.contributing}

## Tests
${answr.tests}

## Questions
- GitHub Username: ${answr.username}
- Contact Email: ${answr.email}

`;
}

module.exports = generateReadme;