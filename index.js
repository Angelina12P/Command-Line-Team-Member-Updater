const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require("./questions.js")
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
//const render = require("./src/page-template.js");


// consider adding validation to ensure that user input is in the proper format. 

// ask qs inquirer. 
// is this going to be an internal, manager or Engineer, our output needs to create an array. The array consists of output from enquirer. user selected makes new manager. 

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
  //ask
  let menuAnswer = await inquirer.prompt(questions.menu)

  switch (menuAnswer.action) {
    case "Add Engineer":
      addEngineer()
      break;
    case "Add Intern":
      addIntern()
      break;
    default:
      console.log("Supposed to write the file")
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
  menu()
}

// // Finish Building Team Option:
// // Exit application, HTML generated. 



// // team.push engineerResponse, internResponse, managerResponse 


// // Render function CAlled, passing in array of employee objects. 


// // render function includes block of HTML including templated divs for each employee!


// // * Create an HTML file using the HTML returned from the `render` function. 
// //   * Write it to a file named `team.html` in the `output` folder. 
// //   * You can use the provided variable `outputPath` to target this location.


// team.push(new Manager(Angel, 12, "my.email@email.com"))
// team.push(new Engineer(Richie, 8, "his@email.net"))
// //  these values come from inquirer. 
// // are you done, then after all filled out. then render, pas team to render. 
// // then it generates the html doc based on the array 

// let htmlDoc = render(team)

// // need to us fs write file. render returns a string the string is what we want to write to the html and that write to file. 

// await fs.writeFile(outputPath, htmlDoc)



startProgram()
