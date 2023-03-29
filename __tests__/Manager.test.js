const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("initialization",() => {
        it("should create an object with 'name', 'id', 'email', and their 'officeNumber'", () => {
            const manager = new Manager("James", "01", "james@email.com", "0002");

            expect(manager.name).toEqual("James");
            expect(manager.id).toEqual("01");
            expect(manager.email).toEqual("james@email.com");
            expect(manager.officeNumber).toEqual("0002");
        });
        it("should return 'Manager' as role instead of 'Employee'",() => {
            const manager = new Manager("James", "01", "james@email.com", "0002");

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});