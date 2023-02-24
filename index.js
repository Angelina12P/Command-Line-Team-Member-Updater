const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// ask qs inquirer. 
// is this going to be an internal, manager or Engineer, our output needs to create an array. The array consists of output from enquirer. user selected makes new manager. 

let team =[];

startProgram()
async function startProgram(){

team.push(new Manager(Angel, 12, "my.email@email.com"))
team.push(new Engineer(Richie, 8, "his@email.net"))
//  these values come from inquirer. 
// are you done, then after all filled out. then render, pas team to render. 
// then it generates the html doc based on the array 

let htmlDoc = render(team)

// need to us fs write file. render retuns a string the string is what we want to write to the html and that write to file. 

await fs.writeFile(outputPath, htmlDoc)
}