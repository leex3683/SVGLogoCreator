//StackOverflow on centering SVG text:
//<https://stackoverflow.com/questions/5546346/how-to-place-and-center-text-in-an-svg-rectangle>

const Shapes = require("./shapes.js");

class Triangle extends Shapes {
  constructor(backgroundColor, text, textColor) {
    super(backgroundColor, text, textColor);
  }
  render() {
    return [
      `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">`,
      `<polygon points="250,0 0,500 500,500" stroke="black" stroke-width="1" fill="${this.backgroundColor}" />`,
      `<text x='50%' y='60%' fill="${this.textColor}" dominant-baseline="middle" text-anchor="middle" font-size="100">${this.text}</text>`,
      `</svg>`,
    ].join("");
  }
}

module.exports = Triangle;
