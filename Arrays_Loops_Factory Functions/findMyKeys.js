// Code Challenges: Intermediate JavaScript - findMyKeys()


// TODO: Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.

// I can use the built-in method findIndex(), which returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

// Created a function with arr as a parameter, and the findIndex() method on the array to return the index of the string 'keys'. Created an arrow function expression within findIndex() to find the element that matches the string 'keys'

const findMyKeys = arr => arr.findIndex(word => word === 'keys')


// *** Alternate approach using a function to find elements with the string 'keys'

    // const findKey = el => el === 'keys'

// Passing findKey into findIndex method as a callback function

    // const findMyKeys = arr => arr.findIndex(findKey)



// Random stuff array
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

// Log the result of calling findMyKeys() with the randomStuff array passed in as an argument
console.log(findMyKeys(randomStuff))
// Should print 4