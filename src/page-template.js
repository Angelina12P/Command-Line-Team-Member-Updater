const Employee = require('../src/modules/Employee.js');
const Engineer = require('../src/modules/Engineer.js');
const Manager = require('../src/modules/Manager.js');
const Intern = require('../src/modules/Intern.js');

function render(employees) {
    let html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Members</title>
</head>
<body>
<header>
</header>
<main>`

    for (const employee of employees) {
        if (employee instanceof Manager) {
            html += `
        <div class="employeeDiv">
        <h1>Manager:</h1>
          <h2>${employee.getName()}</h2>
          <h3>ID: ${employee.getId()}</h3>
          <h3>Email: ${employee.getEmail()}"</h3>
          <h3>Office Number: ${employee.officeNumber}</h3>
        </div>
      `;
        } else if (employee instanceof Engineer) {
            html += `
        <div class="employeeDiv">
          <h1>Engineer:</h1>
          <h2>${employee.getName()}</h2>
          <h3>ID: ${employee.getId()}</h3>
          <h3>Email: ${employee.getEmail()}</h3>
          <h3>GitHub: ${employee.getGithub()}</h3>
        </div>
      `;
        } else if (employee instanceof Intern) {
            html += `
        <div class="employeeDiv">
          <h1>Intern:</h1>
          <h2>${employee.getName()}</h2>
          <h3>ID: ${employee.getId()}</h3>
          <h3>Email: ${employee.getEmail()}></h3>
          <h3>School: ${employee.getSchool()}</h3>
        </div>
      `;
        }
    }

html += `
</main>
</body>
</html>`
    return html
}

module.exports = render
