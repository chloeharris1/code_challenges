// Code Challenges: Intermediate JavaScript - isTheDinnerVegan

// TODO: Write a function isTheDinnerVegan() that takes in an array of food objects and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

// The every() method can be used to check if a condition is true for each element in the array. If the element does not pass the test provided to the every() method, .every() will return false - meaning that at least one element in the array did not pass the test

// Function that uses arr as a parameter
const isTheDinnerVegan = arr => {
// Passing a function into the every() method to check if each item in the array has a source property value of 'plant'
return arr.every(item => item.source === 'plant')
}


// Dinner array of objects
const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

// The console.log passes in the dinner array as an argument to the isTheDinnerVegan's function
console.log(isTheDinnerVegan(dinner))
// Prints false