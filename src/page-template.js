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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Simonetta:ital,wght@0,400;0,900;1,400;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../src/style.css">
</head>
<body>
<header>
    <img src="../src/images/Our.png"alt="Our"class="our"/>
    <img src="../src/images/Team.png"alt="Team"class="team"/>
</header>
<main>`;

    for (const employee of employees) {
        if (employee instanceof Manager) {
            html += `
        <div class="employeeDiv"id="managerDiv">
            <span class="managerImg"></span>
            <div class="text">
                <h1>Manager:</h1>
                <h2>${employee.getName()}</h2>
                <h3>ID: ${employee.getId()}</h3>
                <h3>Email: ${employee.getEmail()}"</h3>
                <h3>Office Number: ${employee.officeNumber}</h3>
            </div>
        </div>
      `;
        } else if (employee instanceof Engineer) {
            html += `
        <div class="employeeDiv"id="engineerDiv">
            <span class="engineerImg"></span>
            <div class="text">
                <h1>Engineer:</h1>
                <h2>${employee.getName()}</h2>
                <h3>ID: ${employee.getId()}</h3>
                <h3>Email: ${employee.getEmail()}</h3>
                <h3>GitHub: ${employee.getGithub()}</h3>
            </div>
        </div>
      `;
        } else if (employee instanceof Intern) {
            html += `
        <div class="employeeDiv" id="internDiv">
            <span class="internImg"></span>
            <div class="text">
                <h1>Intern:</h1>
                <h2>${employee.getName()}</h2>
                <h3>ID: ${employee.getId()}</h3>
                <h3>Email: ${employee.getEmail()}></h3>
                <h3>School: ${employee.getSchool()}</h3>
            </div>
        </div>
      `;
        }
    }

html += `
</main>
</body>
</html>`;
    return html
}

module.exports = render
