const Circle = require("../circle.js");
const Rect = require("../rect.js");
const Triangle = require("../triangle.js");

describe("triangle", () => {
  test("Should create a Triangle with the user`s choice of colors and text", () => {
    const triangleTest = new Triangle("yellow", "MMM", "black");
    const expectedHtml = [
      `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">`,
      `<polygon points="250,0 0,500 500,500" stroke="black" stroke-width="1" fill="yellow" />`,
      `<text x='50%' y='60%' fill="black" dominant-baseline="middle" text-anchor="middle" font-size="100">MMM</text>`,
      `</svg>`,
    ].join('');
    expect(triangleTest.render()).toEqual(expectedHtml);
  });
});
describe("circle", () => {
  test("Should create a Circle with the user`s choice of colors and text", () => {
    const circleTest = new Circle("yellow", "MMM", "black");
    const expectedHtml = [
      `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">`,
      `<circle cx=\"250\" cy=\"250\" r=\"250" stroke="black" stroke-width="1" fill="yellow" />`,
      `<text x='50%' y='50%' fill="black" dominant-baseline="middle" text-anchor="middle" font-size="100">MMM</text>`,
      `</svg>`,
    ].join('');
    expect(circleTest.render()).toEqual(expectedHtml);
  });
});

describe("rect", () => {
  test("Should create a Rectangle with the user`s choice of colors and text", () => {
    const rectTest = new Rect("yellow", "MMM", "black");
    const expectedHtml = [
      `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">`,
      `<polygon points="0,0 0,500 500,500 500,0" stroke="black" stroke-width="1" fill="yellow" />`,
      `<text x='50%' y='50%' fill="black" dominant-baseline="middle" text-anchor="middle" font-size="100">MMM</text>`,
      `</svg>`,
    ].join('');
    expect(rectTest.render()).toEqual(expectedHtml);
  });
});