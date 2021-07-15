const Intern = require("../lib/Intern");

describe("Intern class", () => {
    describe("Intern instantiation", () => {
        it("should create a new Intern class", () => {
            const obj = new Intern("Jose", 0, "nunya@test.com");

            expect(obj instanceof Intern).toEqual(true);
        })
        
        it("should return 0 as a id", () => {
            const obj = new Intern("Jose", 0, "nunya@test.com");

            expect(obj.getId()).toEqual(0);
        })

        it("should return Jose as a name", () => {
            const obj = new Intern("Jose", 0, "nunya@test.com");

            expect(obj.getName()).toEqual("Jose");
        })
        
        it("should return email@test.com as a email", () => {
            const obj = new Intern("Jose", 0, "nunya@test.com");

            expect(obj.getEmail()).toEqual("nunya@test.com");
        })

        it("should return school HS as school", () => {
            const obj = new Intern("Jose", 0, "nunya@test.com", "school HS");

            expect(obj.getSchool()).toEqual("school HS");
        })
    });
});