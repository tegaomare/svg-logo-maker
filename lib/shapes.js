/***
 * Base Shape Class that all the other classes will inherit from
 *
 * @class
 *
 * @param color - Color name or hexidecimal value
 *
 */
class Shape {
  color;
  constructor(color) {
    this.color = color;
  }
  /***
   * setColor function to be used to change the colors for classes that implement this one.
   * @param color - The color that is going to be updated on the Shape
   */
  setColor(color) {
    this.color = color;
  }
  /***
   * Render function that needs to be overidden when being implemented
   * @throws ✘ ERROR : Shape should implement its own render function
   */
  render() {
    throw new Error(
      "\x1B[31m✘\x1B[0m \x1B[31m\x1B[7m ERROR \x1B[0m: Shape should implement its own render function"
    );
  }
}

/***
 * The Circle shape that renders out the svg string for the circle
 *
 * @class
 * @augments Shape
 *
 * @param {string} color - Color keyword or hexidecimal value
 *
 */
class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  /***
   * Render function for the circle that outputs the circles svg string
   *
   * @override
   * @returns {string} svg element for a circle in string format
   */
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`;
  }
}

/***
 * The Triangle shape that renders out the svg string for the triangle
 *
 * @class
 * @augments Shape
 *
 * @param {string} color - Color keyword or hexidecimal value
 *
 */
class Triangle extends Shape {
  constructor(color) {
    super(color);
  }
  /***
   * Render function for the triangle that outputs the triangles svg string
   *
   * @override
   * @returns {string} svg element for a triangle in string format
   */
  render() {
    return `<polygon points="150 05, 260 170, 40 170, 150" fill="${this.color}"/>`;
  }
}

/***
 * The Square shape that renders out the svg string for the square
 *
 * @class
 * @augments Shape
 *
 * @param {string} color - Color keyword or hexidecimal value
 */
class Square extends Shape {
  constructor(color) {
    super(color);
  }
  /***
   * Render function for the square that outputs the squares svg string
   *
   * @override
   * @returns {string} svg element for a square in string format
   */
  render() {
    return `<rect x="50" y="0" width="200" height="200" fill="${this.color}"/>`;
  }
}

module.exports = { Circle, Square, Triangle };
