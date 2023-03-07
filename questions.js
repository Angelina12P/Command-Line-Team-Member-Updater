module.exports = {
    manager:[
        {
          type: "input",
          name: "name",
          message: "Team Manager Name: ",
        },
        {
          type: "input",
          name: "id",
          message: "Team Manager Employee ID: ",
        },
        {
          type: "input",
          name: "email",
          message: "Team Manager Email Address: ",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Team Manager Office Number: ",
        }],
        menu: [
            {
              type: 'list',
              name: 'action',
              message: "Select Team Member: ",
              choices: ["Add Engineer", "Add Intern", "Finish Building Team"],
            }],
        engineer: [
            
                {
                  type: "input",
                  name: "name",
                  message: "Engineer Name: ",
                },
                {
                  type: "input",
                  name: "id",
                  message: "Engineer ID: ",
                },
                {
                  type: "input",
                  name: "email",
                  message: "Engineer Email Address: ",
                },
                {
                  type: "input",
                  name: "gitHub",
                  message: "Engineer GitHub Username: ",
                }],
                intern: [{
                    type: "input",
                    name: "name",
                    message: "Intern Name: ",
                  },
                  {
                    type: "input",
                    name: "id",
                    message: "Intern ID: ",
                  },
                  {
                    type: "input",
                    name: "email",
                    message: "Intern Email Address: ",
                  },
                  {
                    type: "input",
                    name: "school",
                    message: "School GitHub Username: ",
                  }]
}