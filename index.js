const inquirer = require("inquirer");
const fs = require("fs");


function promptUser() {
    inquirer
      .prompt([
        {
            type: "list",
            message: "What shape would you like the logo to render?",
            choices: ["Triangle", "Square", "Circle"],
            name: "shape",
          },
      ])
      .then((answers) => {
    })
}
