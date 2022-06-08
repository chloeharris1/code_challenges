// Code Challenges: Intermediate JavaScript - Fix the broken code

// TODO: We wrote a function, smallestPowerOfTwo(), which takes in an array.

// Within our function, we create a new array called results. We then loop through the argument array and calculate the smallest power of two which is greater than the current element before using .push() to add it to results.

// Array of numbers which will be passed into the smallestPowerOfTwo function 
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
  let results = [];

  // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
  // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    let j = 1;
    while (j < number) {
      j = j * 2;
    }
    // Push the result of the calculation to the results array
     results.push(j);
  }
  // Return the results array
   return results;
};

console.log(smallestPowerOfTwo(numbers));
// Prints the returned array [ 8, 4, 16, 32 ] 
