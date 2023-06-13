const { Triangle, Square, Circle } = require('../shapes');
const Text = require('../text');
const SVG = require('../svg');
const color = '#ac4532';
const textColor = '#efeffa';
const text = 'NC';
const svgText = new Text(textColor, text).render();
const output = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<polygon points="150 05, 260 170, 40 170, 150" fill="${color}"/>
<text font-family="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" font-size="50px" dominant-baseline="middle" text-anchor="middle" x="150" y="105" fill='${textColor}' >NC</text>
</svg>`;

describe('SVG', () => {
  // Check that the functions Are Working properly
  describe('Class Functions', () => {
    const shape = new Triangle(color).render();
    const svg = new SVG(shape, svgText);
    // Check the render function
    it('should have a render function that outputs the svg string', () => {
      expect(svg.render()).toEqual(output);
    });

    // Check the writeToFile Function doesn't throw any errors
    it('should have a write file output that writes the svg to a logo.svg file', () => {
      expect(() => svg.writeToFile()).not.toThrow();
    });
  });

  // Check that the Shapes Are getting rendered properly
  describe('SVG Shapes', () => {
    // Check the svg has the circle element on render
    it('should render out an svg that contains the circle element', () => {
      const circle = new Circle(color).render();
      const svg = new SVG(circle, svgText).render();
      expect(svg).toEqual(expect.stringContaining(circle));
    });

    // Check the svg has the triangle element on render
    it('should render out an svg that contains the triangle element', () => {
      const triangle = new Triangle(color).render();
      const svg = new SVG(triangle, svgText).render();
      expect(svg).toEqual(expect.stringContaining(triangle));
    });

    // Check the svg has the square element on render
    it('should render out an svg that contains the triangle element', () => {
      const square = new Square(color).render();
      const svg = new SVG(square, svgText).render();
      expect(svg).toEqual(expect.stringContaining(square));
    });
  });
});
