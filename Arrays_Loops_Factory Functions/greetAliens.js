// Code Challenges: Intermediate JavaScript - greetAliens()

// TODO: Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array. The greeting should take the following format: “Oh powerful [stringElement], we humans offer our unconditional surrender!”

// Function that uses arr as a parameter 
const greetAliens = arr => {
    // Using a for loop to loop through the array 
    for(let i = 0; i < arr.length; i++) {
    // Using string interpolation to inject each array element into string which will be logged to the console
   console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`)
    }
  }
  
  // Array to be passed into the greetAliens function
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  // Invoking the greetAliens function, passing in the aliens array as an argument 
  greetAliens(aliens);
  // Prints
  // Oh powerful Blorgous, we humans offer our unconditional surrender!
  // Oh powerful Glamyx, we humans offer our unconditional surrender!
  // Oh powerful Wegord, we humans offer our unconditional surrender!
  // Oh powerful SpaceKing, we humans offer our unconditional surrender!