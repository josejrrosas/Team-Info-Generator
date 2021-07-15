const Manager = require("../lib/Manager");

describe("Manager class", () => {
    describe("Manager instantiation", () => {
        it("should create a new Manager class", () => {
            const obj = new Manager("Jose", 0, "nunya@test.com");

            expect(obj instanceof Manager).toEqual(true);
        })
        
        it("should return 0 as a id", () => {
            const obj = new Manager("Jose", 0, "nunya@test.com");

            expect(obj.getId()).toEqual(0);
        })

        it("should return Jose as a name", () => {
            const obj = new Manager("Jose", 0, "nunya@test.com");

            expect(obj.getName()).toEqual("Jose");
        })
        
        it("should return email@test.com as a email", () => {
            const obj = new Manager("Jose", 0, "nunya@test.com");

            expect(obj.getEmail()).toEqual("nunya@test.com");
        })

        it("should return officeNum as 1234567890", () => {
            const obj = new Manager("Jose", 0, "nunya@test.com", 1234567890);

            expect(obj.getOfficeNumber()).toEqual(1234567890);
        })
    });
});