class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}


module.exports = Employee;

let newUser = new Employee("Tim", 6, "tim@company.net")
newUser.name = "Sarah";  // I can access the NAME value 
newUser.getName();  // I can access the NAME value 


let tim = {
    id: 9,
    name: "Tim",

    function() {

    }
}