const fs = require("fs");
const path = require("path");

class SVG {
  width = 300;
  height = 200;
  constructor(shape, text) {
    this.shape = shape;
    this.text = text;
  }
  render() {
    return `<svg version="1.1"
width="${this.width}" height="${this.height}"
xmlns="http://www.w3.org/2000/svg">
${this.shape}
${this.text}
</svg>`;
  }
  writeToFile() {
    fs.writeFile(
      path.join(process.cwd(), `logo.svg`),
      this.render(),
      "utf-8",
      (err) => err && console.log(err)
    );
  }
}

module.exports = SVG;
