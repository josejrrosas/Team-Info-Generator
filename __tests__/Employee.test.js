const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("Employee instantiation", () => {
        it("should create a new Employee class", () => {
            const obj = new Employee("Jose", 0, "nunya@test.com");

            expect(obj instanceof Employee).toEqual(true);
        })

        it("should return 0 as a id", () => {
            const obj = new Employee("Jose", 0, "nunya@test.com");

            expect(obj.getId()).toEqual(0);
        })

        it("should return Jose as a name", () => {
            const obj = new Employee("Jose", 0, "nunya@test.com");

            expect(obj.getName()).toEqual("Jose");
        })
        
        it("should return email@test.com as a email", () => {
            const obj = new Employee("Jose", 0, "nunya@test.com");

            expect(obj.getEmail()).toEqual("nunya@test.com");
        })

        it("should return employee as role", () => {
            const obj = new Employee("Jose", 0, "nunya@test.com");

            expect(obj.getRole()).toEqual("Employee");
        })

    });
});
