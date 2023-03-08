const Manager = require("./src/modules/Manager");
const Engineer = require("./src/modules/Engineer");
const Intern = require("./src/modules/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require("./questions.js")
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");


// consider adding validation to ensure that user input is in the proper format. 

let team = [];

async function startProgram() {
  let data = await inquirer
    .prompt(questions.manager)

  let manager = new Manager(
    data.name,
    data.id,
    data.email,
    data.officeNumber)
  team.push(manager)
  menu()
}

async function menu() {
  let menuAnswer = await inquirer.prompt(questions.menu)

  switch (menuAnswer.action) {
    case "Add Engineer":
      addEngineer()
      break;
    case "Add Intern":
      addIntern()
      break;
    default:
      finishBuild()
      break;
  }
}

async function addEngineer() {
  let data = await inquirer
        .prompt(questions.engineer)
    
      let engineer= new Engineer(
        data.name,
        data.id,
        data.email,
        data.gitHub)
      team.push(engineer)
      menu()
    }

async function addIntern() {
  let data = await inquirer
    .prompt(questions.intern)

  let intern= new Intern(
    data.name,
    data.id,
    data.email,
    data.school)
    team.push(intern)
  menu()
}

async function finishBuild(){
  let htmlDoc = render(team)
  await fs.writeFile(outputPath, htmlDoc)
  console.log('Complete')
}


startProgram()
