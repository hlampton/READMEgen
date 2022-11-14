const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme");

function getLic(penJis) {
    if (penJis === "GNU AGPLv3") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (penJis === "GNU GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (penJis === "GNU LGPLv3") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    } else if (penJis === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (penJis === "Boost Software 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (penJis === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
}
const lukaQuest = [

    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },

    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",

    },


    {
        type: "input",
        name: "installation",
        message: "Please enter an explanation how to install the software, or commands for the program.",

    },


    {
        type: "input",
        name: "usage",
        message: "Please describe how we can use this program/project.",

    },


    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
    },


    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project.",

    },


    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions you would like to provide for this project.",

    },


    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",

    },

    {
        type: "input",
        name: "email",
        message: "What is your GitHub email address that contributors may contact?",

    },
];

function writeToFile(TimmyFiles, answr) {
    fs.writeFile(TimmyFiles, generateReadme(answr), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

function init() {
    inquirer.prompt(lukaQuest).then((answr) => {
        console.log(JSON.stringify(answr, null, " "));
        answr.getLic = getLic(answr.license);
        writeToFile("./example/README.md", answr);
    });
}

init();