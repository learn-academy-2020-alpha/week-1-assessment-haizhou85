// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212
const boiling = (temp) =>{
    if(temp < 212) return temp +" is below boiling point"
    else if(temp === 212) return temp + " is at boiling point"
    else return temp +" is above boiling point"
}
console.log(boiling(temp1))
console.log(boiling(temp2))
console.log(boiling(temp3))



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]
const mult5loop = (nums) => {
    let nums5 = []
    for (let i = 0; i < nums.length; i++) {
        nums5.push(nums[i] * 5)
    }
    return nums5
}
console.log(mult5loop(myNumbers1))


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]
const mult5map = (nums) => {
    return nums.map(value => value * 5)
}
console.log(mult5map(myNumbers2))



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"
const removeVowals = (string) => {
    let vowals = "aeiouAEIOU"
    let newString = ""
    for (let i = 0; i < string.length; i++) {
        if (!vowals.includes(string.charAt(i))) { 
            newString += string.charAt(i) 
        }
    }
    return newString
}

console.log(removeVowals(stringWithVowels1))
console.log(removeVowals(stringWithVowels2))


// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

const removeVowals1 = (string) => {
    if (typeof string != "string") {
        return "not a string"
    }else{
        let vowals = "aeiouAEIOU"
        let newString = ""
        for (let i = 0; i < string.length; i++) {
            if (!vowals.includes(string.charAt(i))) { 
                newString += string.charAt(i) 
            }
        }
        return newString
    }
}
console.log(removeVowals1(notAString1))
console.log(removeVowals1(notAString2))


// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]
const onlyCats = (array) => {
    return array.filter(value => value.animal === "cat")
}   
console.log(onlyCats(toonimals))


// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"
const nonCatsNames = (array) => {
    return array.filter(value => value.animal !== "cat").map(value => value.name)
}
console.log(nonCatsNames(toonimals))