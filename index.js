const inquirer = require("inquirer");
const fs = require("fs");


function questions() {
    inquirer
      .prompt([
        {
            type: "list",
            message: "What shape would you like the logo to render?",
            choices: ["Triangle", "Square", "Circle"],
            name: "shape",
          },
          {
            type: "input",
            message:
              "What text would you like you logo to display? (Enter up to three characters)",
            name: "text",
          },
          {
            type: "input",
            message:
              "Choose text color (Enter color keyword OR a hexadecimal number)",
            name: "textColor",
          },
      ])
      .then((answers) => {
    })
}
