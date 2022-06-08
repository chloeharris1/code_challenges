// Code Challenge: Intermediate JavaScript - squareNums()

// TODO: Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// Array of numbers to be squared
const numbers = [2, 7, 9, 171, 52, 33, 14]

// Function that mulitiplies each number by itself
const toSquare = num => num * num

// Function that uses arr as a parameter 
const squareNums = arr => {
// Return a new array which will contain the results of the toSquare function 
return arr.map(toSquare)
}


// Passing in the numbers array as an argument to the squareNums function
console.log(squareNums(numbers))
// Returns [4,   49,   81, 29241, 2704, 1089, 196]
