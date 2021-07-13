// When app start I am prompted to enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

const inquirer = require('inquirer');
const fs = require('fs');

const employeeInput = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is your id?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        }

    ])
}


const managerInput = () => {
    employeeInput();
    inquirer.prompt([
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is your office number?',
        },
    ])
}

const engineerInput = () => {
    employeeInput();
    inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },
    ])
}

const internInput = () => {
    employeeInput();
    inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What school do you attend?',
        },
    ])
}

const addEmployee = () => {
    //ask if user would like to add another employee
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'add',
            message: 'Would you like to add another employee?',
        }
    ])
    .then(val => {
        //if yes, ask what the employee role is and return appropriate function
        if (val.add){
            employeeSelect();
        }
        //if no create html
        else{
            createHTML();
        }
    })
}


