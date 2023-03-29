const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("initialization",() => {
        it("should create an object with 'name', 'id', 'email', and 'github' username", () => {
            const engineer = new Engineer("James", "01", "james@email.com", "jamesPgit");

            expect(engineer.name).toEqual("James");
            expect(engineer.id).toEqual("01");
            expect(engineer.email).toEqual("james@email.com");
            expect(engineer.github).toEqual("jamesPgit");
        });
        it("should return 'Engineer' as role instead of 'Employee'",() => {
            const engineer = new Engineer("James", "01", "james@email.com", "jamesPgit");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});