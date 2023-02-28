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


// consider adding validation to ensure that user input is in the proper format. 



// ask qs inquirer. 
// is this going to be an internal, manager or Engineer, our output needs to create an array. The array consists of output from enquirer. user selected makes new manager. 

let team =[];

startProgram()
async function startProgram(){

    let response = await inquirer 
    .prompt([

    {
        type: "input",
        name: "ManagerName",
        message: "Team Manager Name: ", 
      },
    {
        type: "input",
        name: "ManagerID",
        message: "Team Manager Employee ID: ", 
      },
    {
        type: "input",
        name: "ManagerEmail",
        message: "Team Manager Email Address: ", 
      },
    {
        type: "input",
        name: "ManagerNo",
        message: "Team Manager Office Number: ",
      },


{
    type: 'list',
    name: 'chooseTEAM',
    message: "Select Team Member: ",
    choices: ["-Add Engineer", "-Add Intern", "- Finish Building Team"],
}

    ])

    if (response.chooseTEAM === "-Add Engineer") {
        let engineerResponse = await inquirer.prompt([

// Engineer Option Selected:

{
    type: "input",
    name: "EngineerName",
    message: "Engineer Name: ", 
  },
{
    type: "input",
    name: "EngineerID",
    message: "Engineer ID: ",
  },
{
    type: "input",
    name: "EngineerEmail",
    message: "Engineer Email Address: ", 
  },
{
    type: "input",
    name: "EngineerGit",
    message: "Engineer GitHub Username: ",
  },

// return menu 
        ])
// Intern Option Selected:

else (response.chooseTEAM === "-Add Engineer") {
    let engineerResponse = await inquirer.prompt([

{
    type: "input",
    name: "internName",
    message: "Intern Name: "
  },
{
    type: "input",
    name: "internID",
    message: "Intern ID: "
  },
{
    type: "input",
    name: "internEmail",
    message: "Intern Email Address: "
  },
{
    type: "input",
    name: "internSchool",
    message: "Intern School: "
  },

// return menu
    ]) 


// Finish Building Team Option:
// Exit application, HTML generated. 


 



// Render funtion CAlled, passing in array of employee objects. 


// render function includes block of HTML including templated divs for each employee!


// * Create an HTML file using the HTML returned from the `render` function. 
//   * Write it to a file named `team.html` in the `output` folder. 
//   * You can use the provided variable `outputPath` to target this location.





team.push(new Manager(Angel, 12, "my.email@email.com"))
team.push(new Engineer(Richie, 8, "his@email.net"))
//  these values come from inquirer. 
// are you done, then after all filled out. then render, pas team to render. 
// then it generates the html doc based on the array 

let htmlDoc = render(team)

// need to us fs write file. render retuns a string the string is what we want to write to the html and that write to file. 

await fs.writeFile(outputPath, htmlDoc)
}