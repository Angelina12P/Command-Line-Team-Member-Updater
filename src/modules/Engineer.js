// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// extend employee but also 

// gitHub username 

// getgitHub()

let Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, GitHub) {
    super(name, id, email);
    this.GitHub = GitHub;
  }

  getGithub() {
    return this.GitHub;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;