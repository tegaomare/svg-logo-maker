const { prompt } = require("inquirer");
const generateSvg = require("./lib/utils");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Text to be entered in the logo (Max of 3 Letters)",
    default: "SVG",
    validate(input) {
      if (input.length > 3) return "Text can only be a max of 3 Characters";
      if (input.trim() === "") return "Must include text";
      return true;
    },
    filter(input) {
      return input.toUpperCase();
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Color of Text: (color keyword or hexadecimal number)",
    default: "white",
  },
  {
    type: "list",
    name: "shape",
    message: "Which shape would you like this SVG to be?",
    choices: ["Circle", "Square", "Triangle"],
    default: 0,
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Color of Shape: (color keyword or hexadecimal number)",
    default: "blue",
  },
];

(() => {
  prompt(questions).then((answers) => {
    generateSvg(answers);
  });
})();
