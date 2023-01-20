const { isEmpty } = require("../validations");
const { checkGamerTag } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function


describe("Check Gamer Tag test that check if the tag is correct ", () => {
    test("should return True if Tag name have a minimum of 8 caracter", () => {
        const result = checkGamerTag();
        expect(result).toBe(true);
    });

});