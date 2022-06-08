// Code Challenges: Intermediate JavaScript - sortSpeciesByTeeth()

// TODO: Write a function sortSpeciesByTeeth() that takes in an array of species objects and sorts the array in ascending order based on the average number of teeth that species possesses

// Species array containing species objects
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Created a function expression with arr as a paramenter, and using the sort() method on the array to compare values and return objects with numTeeth in ascending order

// The sort method takes a sorting function that lets us sort numbers correctly by magnitude, not just first digit the way JS normally sorts.

// The outer function returns undefined since Array.sort() is an in place operation that doesn’t return anything.

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => { 
// When the greater than sign is used, the larger value goes to the right. When the less than sign is used, the larger value goes to the left
  return speciesObj1.numTeeth > speciesObj2.numTeeth; 
})

// *** Better practice to write the outer function in standard form rather than expression form
// const sortSpeciesByTeeth = function (arr) {
//     arr.sort((a,b) => a.numTeeth > b.numTeeth)
// };



// *** Alternate approach using a comparison function *** 
const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth;

// Using compareTeeth as a callback function for the sort() method

// const sortSpeciesByTeeth = arr => arr.sort(compareTeeth);



// Using console.log to log result of calling sortSpeciesByTeeth function with the speciesArray as an argument
console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]
