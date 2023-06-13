const Text = require('../text');

describe('Text', () => {
  it('should render out the correct svg text element with the color and text', () => {
    const color = '#af3f03';
    const testText = 'NC';
    const text = new Text(color, testText);
    expect(text.render()).toEqual(
      `<text font-family="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" font-size="50px" dominant-baseline="middle" text-anchor="middle" x="150" y="105" fill='${color}' >${testText}</text>`,
    );
  });
});
