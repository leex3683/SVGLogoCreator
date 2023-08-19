const inquirer = require('inquirer');
const fs = require('fs');
const shapeChoice = require('./shapeChoice.js')

function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please choose three letters or less',
            name: 'Letters',
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
            name: 'TextColor',
        },
        {
            type: 'input',
            message: 'Please choose a shape color (either hex, or keyword)',
            name: 'ShapeColor',
        },
        {
            type: 'list',
            name: 'Shape',
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
