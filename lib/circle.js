//StackOverflow on centering SVG text:
//<https://stackoverflow.com/questions/5546346/how-to-place-and-center-text-in-an-svg-rectangle>

const Shapes = require('./shapes.js');

class Circle extends Shapes {
    constructor(backgroundColor, text, textColor){
        super(backgroundColor, text, textColor)
    };
    draw(){
    
        return `
        <svg width="500" height="500">
        
        <circle cx="250" cy="250" r="250" stroke="black" stroke-width="1" fill="${this.backgroundColor}" />
        <text x=50% y=50% fill="${this.textColor}" dominant-baseline="middle" text-anchor="middle" font-size="100">${this.text}</text>
      </svg>
        `


    }

}

module.exports = Circle;