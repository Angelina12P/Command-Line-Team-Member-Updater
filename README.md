# Command Line Team-Member Updater

## Description

This command-line application will take in information about employees on a software engineering team, then generate an HTML webpage that displays summaries for each person.

There are blueprint classes for each team member role: Manager, Engineer and Intern, which can be updated with information and pushed onto your webpage, for easy updating of team member information sections.
## Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
In order to use this program, first clone this repository and navigate to it in your chosen CLI. You will need to install node from nodejs.org. You will also need to install jest and inquirer by running npm i jest inquirer, and you will then be able to run node index to start the application. After answering the questions, a html file will appear in the output folder to be used and deployed as wished.
## Usage

When a user starts the application, they're prompted to enter the team manager's:

Name,
Employee ID,
Email address,
Office number.

When a user enters those requirements, the user is presented with a menu with the option to:

Add an engineer,
Add an intern,
Finish building the team.

When a user selects the engineer option, the user is prompted to enter the following and then taken back to the menu:

Engineer's Name,
ID,
Email,
GitHub username.

When a user selects the intern option, the user is prompted to enter the following and then taken back to the menu:

Intern’s name,
ID,
Email,
School.

When a user decides to finish building their team, they exit the application and the HTML is generated.

The application can be found here:
![Application URL](https://angelina12p.github.io/Command-Line-Team-Member-Updater/)

This is a sample image of the working application's functionality:
![Application Functionality](https://user-images.githubusercontent.com/117308737/223736881-9bbbe888-8dc9-41d7-aeae-9968617ec901.png)

## Credits
[node.js](https://nodejs.org/en/download) for the creation of te application
[Jest](https://www.npmjs.com/package/jest) for running the unit tests
[Inquirer](https://www.npmjs.com/package/inquirer) for the prompted questions

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The license will be MIT open source, please see documentation for further details.
https://opensource.org/license/mit/


## How to Contribute

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

This project will use the open source contributer covenant. Please see below: 

https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md

## Tests

Please see tests section of folder.

