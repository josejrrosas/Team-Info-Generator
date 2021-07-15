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
        addEmployee(mgr);
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
        addEmployee(engnr);
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
        addEmployee(intrn);
    })
}


//asks if there is another employee to be added, 
//this will be called after every added employee
const addEmployee = (employee) => {
    employees.push(employee);
    createHTML(employee);
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
            return employeeSelect();
        }
        //if no create html
        else{
            finishHtml();
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
            finishHTML();
        }
      });
}

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-dark bg-danger bg-gradient p-5">
                <div class="container-fluid">
                  <span class="navbar-brand mb-0 h1 mx-auto fs-1">My Team</span>
                </div>
              </nav>
        </header>
        <div class="row">
        `;
    fs.writeFile("./dist/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

const createHTML = (newEmp) => {
    // use employees array to  build HTML
    const name = newEmp.getName();
    const id = newEmp.getId();
    const email = newEmp.getEmail();
    const role = newEmp.getRole();
    let data = "";
        if (role === "Engineer") {
            const gitHub = newEmp.getGithub();
            data = 
            `
    <div class="card mx-auto m-3 shadow-lg" id="manager" style="width: 18rem;">
        <div class="card-body bg-primary text-white shadow-sm">
          <h4 class="card-title">${name}</h4>
          <h5 class="card-title">${role}</h5>
        </div>
        <ul class="list-group list-group-flush p-3 ">
          <li class="list-group-item border">ID:${id}</li>
          <li class="list-group-item border"><a href="mailto:${email}">Email:${email}</a></li> 
          <li class="list-group-item border"><a target="_blank" href="https://github.com/${gitHub}">Github:${gitHub}</a></li> 
        </ul>
    </div>
        `;
        } 
        
        else if (role === "Intern") {
            const school = newEmp.getSchool();
            data = `
    <div class="card mx-auto m-3 shadow-lg" id="manager" style="width: 18rem;">
        <div class="card-body bg-primary text-white shadow-sm">
            <h4 class="card-title">${name}</h4>
            <h5 class="card-title">${role}</h5>
        </div>
        <ul class="list-group list-group-flush p-3">
            <li class="list-group-item border">ID:${id}</li>
            <li class="list-group-item border"><a href="mailto:${email}">Email:${email}</a></li> 
            <li class="list-group-item border">School:${school}</li> 
        </ul>
    </div>
        `;
        } 

        else if (role === "Manager") {
            const officeNumber = newEmp.getOfficeNumber();
            data = `
    <div class="card mx-auto m-3 shadow-lg" id="manager" style="width: 18rem;">
        <div class="card-body bg-primary text-white shadow-sm">
        <h4 class="card-title">${name}</h4>
        <h5 class="card-title">${role}</h5>
            </div>
        <ul class="list-group list-group-flush p-3">
        <li class="list-group-item border">ID:${id}</li>
        <li class="list-group-item border"><a href="mailto:${email}">Email:${email}</a></li> 
        <li class="list-group-item border">Office Number:${officeNumber}</a></li> 
        </ul>
    </div>
        `;
        }

        else{
            finishHtml();
            return ("created team");
        }

        fs.appendFile("./dist/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return "team member added";
        });

};

function finishHtml() {
    const html = `
    </div>
</body>
</html>`;

console.log("end");
    fs.appendFile("./dist/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
}
startHtml();
managerInput();