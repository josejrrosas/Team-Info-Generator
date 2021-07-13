// When app start I am prompted to enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

const inquirer = require('inquirer');
const fs = require('fs');

const employeeInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is your name?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your name?',
        }

    ])
}