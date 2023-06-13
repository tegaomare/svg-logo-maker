class Text {
  constructor(color, text) {
    this.text = text;
    this.color = color;
  }
  render() {
    return `<text font-family="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" font-size="50px" dominant-baseline="middle" text-anchor="middle" x="150" y="105" fill='${this.color}' >${this.text}</text>`;
  }
}

module.exports = Text;
