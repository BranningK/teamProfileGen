const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("initialization",() => {
        it("should create an object with 'name', 'id', 'email', and their 'school' name", () => {
            const intern = new Intern("James", "01", "james@email.com", "Clown University");

            expect(intern.name).toEqual("James");
            expect(intern.id).toEqual("01");
            expect(intern.email).toEqual("james@email.com");
            expect(intern.school).toEqual("Clown University");
        });
        it("should return 'Intern' as role instead of 'Employee'",() => {
            const intern = new Intern("James", "01", "james@email.com", "Clown University");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});