// ASSESSMENT 1: INTRO TO JAVASCRIPT TESTING WITH JEST
// Coding practical questions

// To set up the testing environment run the following commands in terminal
// $ npm -g install yarn
// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.
describe("addThemUp" , () =>{
    test("return the sum of 214 and 983", () => {
        expect(addThemUp(214, 983)).toEqual(1197)
    })
})



// --------------------1b) See the test fail. THEN write the code to make the test pass.

const addThemUp = (num1, num2) => {
    return num1 + num2
}


// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

describe("triangleArea", () => {
    test("return the area of a triangle with 6 as base and 10 as height", () => {
        expect(triangleArea(6, 10)).toEqual(30)
    })
})



// --------------------2b) See the test fail. THEN write the code to make the test pass.
const triangleArea = (base, height) => {
    return base * height / 2
}