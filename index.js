
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// -----------------------------


// TODO: Include packages needed for this application
const inquire = require('inquirer');

const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown");

//Answer validation

function validateAnswer(answer) {
    if (answer != "") {
        return true;
    } else {
        return "Please answer the question with some kind on input.";
    }
}


// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectname',
        validate: validateAnswer,
    },
    {
        type: 'input',
        message:  'Provide a brief description of your project.',
        name: 'description',
        validate: validateAnswer,
    },
    {
        type: 'input',
        message:  'What was you motivation behind this project?',
        name: 'motivation',
        validate: validateAnswer,
    },
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'username',
        validate: validateAnswer,
      },
      {
        type: 'input',
        message: 'What is your Github email address for prospective contributors?',
        name: 'userEmail',
        validate: validateAnswer,
      },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, generateMarkdown(data), function (err) {
//         if (err) {
//             return console.log(err);
//         }
//     });
// }

function createFile(fileName, data) {
    fs.writeFile("./utils/generateMarkdown" + fileName, data, function (error) {
      if (error) {
        return console.log(error);
      }
      console.log(fileName + "Successfully Created!");
    });
  }


// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions).then (function (data) {
        createFile("README.md", generateMarkdown(data));
      });
}

// // Function call to initialize app
init();
