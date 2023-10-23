const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

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
          {
            type: "input",
            message:
              "Choose shapes color (Enter color keyword OR a hexadecimal number)",
            name: "shapeBackgroundColor",
          },
      ])
      .then((answers) => {
        if (answers.text.length > 3) {
            console.log("Must enter a textof upto 3 characters");
            promptUser();
          } else {
            
            writeToFile("logo.svg", answers);
          }
    })
}

questions()