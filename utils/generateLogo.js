const Shape = require("../lib/Shape.js");
const Triangle = require("../lib/Triangle.js");
const Square = require("../lib/Square.js");
const Circle = require("../lib/Circle.js");

function generateLogo(data) {
  if (data.shape === "Circle") {
    const circleLogo = new Circle();
    return circleLogo.render(data);
  } else if (data.shape === "Triangle") {
    const triangleLogo = new Triangle();
    return triangleLogo.render(data);
  } else {
    const squareLogo = new Square();
    return squareLogo.render(data);
  }
}

module.exports = generateLogo;
