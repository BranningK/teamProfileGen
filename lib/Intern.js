const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }


    getRole() {
        return "Intern";
    }
}


module.exports = Intern;

let newIntern = new Intern("Charles", 17, "charles@company.net", "Campbell University");
