const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    describe("Engineer instantiation", () => {
        it("should create a new Engineer class", () => {
            const obj = new Engineer("Jose", 0, "nunya@test.com");

            expect(obj instanceof Engineer).toEqual(true);
        })
        
        it("should return 0 as a id", () => {
            const obj = new Engineer("Jose", 0, "nunya@test.com");

            expect(obj.getId()).toEqual(0);
        })

        it("should return Jose as a name", () => {
            const obj = new Engineer("Jose", 0, "nunya@test.com");

            expect(obj.getName()).toEqual("Jose");
        })
        
        it("should return email@test.com as a email", () => {
            const obj = new Engineer("Jose", 0, "nunya@test.com");

            expect(obj.getEmail()).toEqual("nunya@test.com");
        })

        it("should return username as gihthub username", () => {
            const obj = new Engineer("Jose", 0, "nunya@test.com", "username");

            expect(obj.getGithub()).toEqual("username");
        })

        
    });
});