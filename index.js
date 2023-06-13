//Including packages etc needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./utils/generateLogo.js");

//array of questions for user input
const questions = [
  {
    name: "text",
    type: "input",
    message: "Enter up to three characters for text:",
  },
  {
    name: "textColor",
    type: "input",
    message: "Input text color (Enter color keyword OR a hexadecimal number):",
  },
  {
    name: "shape",
    type: "list",
    message: "Select shape:",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    name: "shapeColor",
    type: "input",
    message: "Input shape color (Enter color keyword OR a hexadecimal number):",
  },
];

//function to write file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Generated logo.svg");
  });
}

//function to handleAnswers
const handleAnswers = (answers) => {
  if (answers.text.length > 3) {
    console.log("Text must be 3 characters or less");
    init(); //makes user enter params again if text if more than 3 chars
  } else {
    //Generate SVG file
    //console.log(answers);
    writeToFile("logo.svg", generateLogo(answers));
  }
};
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

//Creating a function to initialize app
function init() {
  inquirer.prompt(questions).then(handleAnswers);
}

// Function call to initialize app
init();
