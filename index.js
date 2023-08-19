const inquirer = require('inquirer');
const fs = require('fs');

const Triangle = require('./lib/triangle.js');
const Circle = require('./lib/circle.js');
const Rect = require('./lib/rect.js');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success')
    );
}

function drawShape(response){
    
    switch(response.shape) {
        case 'Circle':
        const shapeC = new Circle(response.backgroundColor, response.text, response.textColor);
        return shapeC.render()
            break;
        case 'Triangle':
        const shapeT = new Triangle(response.backgroundColor, response.text, response.textColor);
        return shapeT.render()
            break;
        case 'Square':
            const shapeR = new Rect(response.backgroundColor, response.text, response.textColor);
        return shapeR.render()
            break;
        default:
        return''
      }
}

function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please choose three letters or less',
            name: 'text',
            validate: (answer) => {
                if(answer.length >3){
                    return console.log("Please choose up to 3 characters")
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Please choose a text color (either hex, or keyword)',
            name: 'textColor',
        },
        {
            type: 'input',
            message: 'Please choose a shape color (either hex, or keyword)',
            name: 'backgroundColor',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please Choose a Shape',
            choices: ['Circle', 'Triangle', 'Square']
        },
    ])
    .then((response) =>
    writeToFile(`./examples/logo.svg`, drawShape(response))
    );

}

// Function call to initialize app
init();
