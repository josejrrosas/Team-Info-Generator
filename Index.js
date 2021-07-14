// When app start I am prompted to enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];
const basicQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee?',
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the employees id?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the employees email?',
    }
];

//Asks for manager's office number
const managerInput = () => {
    inquirer.prompt([
        ...basicQuestions,
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is the managers office number?',
        }
    ])
    .then((answers) => {
        // build new Manager() using constructor with answers and send to addEmployee
        const mgr = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
        return addEmployee(mgr);
    })
}


//asks for engineers github
const engineerInput = () => {
    return inquirer.prompt([
        ...basicQuestions,
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers github username?',
        },
         ])
    .then(function(answers){
        const engnr = new Engineer(answers.name, answers.id, answers.email, answers.github);
        return addEmployee(engnr);
    })
}


//asks for intern's school
const internInput = () => {
    return inquirer.prompt([
        ...basicQuestions,
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern attend?',
        },
        ])
    .then(function(answers){
        const intrn = new Intern(answers.name, answers.id, answers.email, answers.school);
        return addEmployee(intrn);
    })
}


//asks if there is another employee to be added, 
//this will be called after every added employee
const addEmployee = (employee) => {
    employees.push(employee);
    //ask if user would like to add another employee
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'add',
            message: 'Would you like to add another employee?',
        }
    ])
    .then(val => {
        //if yes, ask what the employee role is and return appropriate function
        if (val.add){
            return employeeSelect();
        }
        //if no create html
        else{
            createHTML();
        }
    })
}


//Asks what the employee role will be added. will be called if 
//user wants to add another employee
const employeeSelect = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addRole',
            message: 'What role would you like to add?',
            choices:['Manager','Engineer', 'Intern', 'Nevermind, team complete.'],
        },
    ])
    //if else statement for selected employee
    .then(val => {
        if (val.addRole === 'Manager') {
            managerInput();
        } 
        else if(val.addRole === 'Engineer'){
            engineerInput();
        }
        else if(val.addRole === 'Intern'){
            internInput();
        }
        else{
            createHTML();
        }
      });
}

const createHTML = () => {
    // use employees array to  build HTML
    console.log(employees);
};

managerInput();