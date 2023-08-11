// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.

//Pseudocode:
//if modulus 3 is 0, that means that num is divisible by 3
// return num modulus 3 == 0 to output boolean

function isDivisibleByThree(num){
    return num%3 === 0
}

//Tests:
console.log(isDivisibleByThree(3)) // true
console.log(isDivisibleByThree(6)) // true
console.log(isDivisibleByThree(0)) // true
console.log(isDivisibleByThree(-3)) // true
console.log(isDivisibleByThree(167)) // false
console.log(isDivisibleByThree(91)) // false

// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.

//Pseudocode:
//split string into array so we can use length property to count characters
//to eliminate empty space in array, use for loop and splice 
//use array.length on spliced array
//return length


function numberofChars(str){
let newStr = str.split('')
for (let i=0; i<newStr.length;i++){
if (newStr[i] === " "){
    newStr.splice(i, 1)
    //console.log(newStr[i])
}
if (newStr.includes(" ") === true)

}
console.log(newStr)
}

//Tests:
console.log(numberofChars("hello")) //5
console.log(numberofChars("may")) //3
console.log(numberofChars("hi there"))//7
console.log(numberofChars("double  space")) //13

// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")

// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.