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
    test("should return True if Tag name have a minimum of 8 caracter, if less of 8 it returns false", () => {
        const resultTrue = checkGamerTag("123456780");
        const resultFalse = checkGamerTag("1234");
        expect(resultTrue).toBe(true);
        expect(resultFalse).toBe(false);
    });

    test("should return True if Tag name have a minimum of 1 special caracter, if less than 1  it returns false", () => {
        const resultTrue = checkGamerTag("raphael@");
        const resultFalse = checkGamerTag("raphaelmalka");
        expect(resultTrue).toBe(true);
        expect(resultFalse).toBe(false);
    });

});