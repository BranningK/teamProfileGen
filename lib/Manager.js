const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }


    getRole() {
        return "Manager";
    }
}


module.exports = Manager;

let newManager = new Manager("Sarah", 12, "sarah@company.net");
