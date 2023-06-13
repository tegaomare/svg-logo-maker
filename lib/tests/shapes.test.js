const { Circle, Triangle, Square } = require("../shapes");

describe("Shapes", () => {
  const color = "#3434f2";

  // Circle Tests
  describe("Circle", () => {
    const circle = new Circle(color);

    // Checking the color Property properly inherits
    it("should have the same color property that is put into it", () => {
      expect(circle.color).toEqual(color);
    });

    //Checking that the render function properly works
    it("should have a render function and output the correct svg element", () => {
      const expectedOutput = `<circle cx="150" cy="100" r="100" fill="${color}"/>`;
      expect(circle.render()).toEqual(expectedOutput);
    });

    // Checking inherited setColor function
    it("should have a inherited setColor function from the Shape class that changes the color property", () => {
      circle.setColor("red");
      expect(circle.render()).toEqual(
        '<circle cx="150" cy="100" r="100" fill="red"/>'
      );
    });
  });

  // Triangle Tests
  describe("Triangle", () => {
    const triangle = new Triangle(color);

    // Checking the color Property properly inherits
    it("should have the same color property that is put into it", () => {
      expect(triangle.color).toEqual(color);
    });

    //Checking that the render function properly works
    it("should have a render function and output the correct svg element", () => {
      const expectedOutput = `<polygon points="150 05, 260 170, 40 170, 150" fill="${color}"/>`;
      expect(triangle.render()).toEqual(expectedOutput);
    });

    // Checking inherited setColor function
    it("should have a inherited setColor function from the Shape class that changes the color property", () => {
      triangle.setColor("red");
      expect(triangle.render()).toEqual(
        '<polygon points="150 05, 260 170, 40 170, 150" fill="red"/>'
      );
    });
  });

  // Square Tests
  describe("Square", () => {
    const square = new Square(color);

    // Checking the color Property properly inherits
    it("should have the same color property that is put into it", () => {
      expect(square.color).toEqual(color);
    });

    //Checking that the render function properly works
    it("should have a render function and output the correct svg element", () => {
      const expectedOutput = `<rect x="50" y="0" width="200" height="200" fill="${color}"/>`;
      expect(square.render()).toEqual(expectedOutput);
    });

    // Checking inherited setColor function
    it("should have a inherited setColor function from the Shape class that changes the color property", () => {
      square.setColor("red");
      expect(square.render()).toEqual(
        '<rect x="50" y="0" width="200" height="200" fill="red"/>'
      );
    });
  });
});
