// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithub()

const Employee = require ("./Employee");
class Engineer extends Employee{
    constructor(name, id, email, github){
        super (name, id, email);
        this.github = github;
    }
    
    getGithub(){
        return this.github;
    }
    
    // getRole()—overridden to return 'Engineer'
    getRole(){
        return "Engineer";
    }
}