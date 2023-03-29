const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("initialization",() => {
        it("should create an object with 'name', 'id', and 'email'", () => {
        const employee = new Employee("James", "01", "james@email.com");

        expect(employee.name).toEqual("James");
        expect(employee.id).toEqual("01");
        expect(employee.email).toEqual("james@email.com");
        });
    });
    it("should return 'Employee' as its role",() => {
        const employee = new Employee("James", "01", "james@email.com");
        
        expect(employee.getRole()).toEqual("Employee");
    });
});
