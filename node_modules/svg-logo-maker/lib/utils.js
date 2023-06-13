const { Square, Circle, Triangle } = require('./shapes');
const SVG = require('./svg');
const Text = require('./text');

function generateSvg(answers) {
  const { text, textColor, shape, shapeColor } = answers;
  const svgText = new Text(textColor, text).render();
  switch (shape) {
    case 'Square':
      new SVG(new Square(shapeColor).render(), svgText).writeToFile();
      break;
    case 'Triangle':
      new SVG(new Triangle(shapeColor).render(), svgText).writeToFile();
      break;
    case 'Circle':
      new SVG(new Circle(shapeColor).render(), svgText).writeToFile();
      break;
    default:
      console.log(
        '\x1B[31m✘\x1B[0m \x1B[31m\x1B[7m ERROR \x1B[0m: Shape choices should be impossible',
      );
      break;
  }
}

module.exports = generateSvg;
