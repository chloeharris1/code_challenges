// Code Challenges: Intermediate JavaScript - declineEverything() and acceptEverything()

// TODO: Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them. The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().

// The forEach() method executes a provided function once for each array element.

// Array of veggies to be passed into the functions as an argument 
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

// politelyDecline will be used as a callback function in the forEach method
const politelyDecline = (veg) => {
      // This will print a string that includes each veggie in the veggie array
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// declineEverything() takes in an array of strings and loops through each element in the array
const declineEverything = arr => {
// Using the forEach method and passing in politelyDecline as a callback function. The politelyDecline function will be performed on each element in the array.
arr.forEach(politelyDecline);
}


// acceptEverything() takes in an array of strings and loops through each element in the array and accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'

const acceptEverything = arr => {
arr.forEach((veg) =>
// Using string interpolation to print a string for each veggie in the array
console.log(`Ok, I guess I will eat some ${veg}.`))
}

// Invoking acceptEverything using the veggies array as an argument
acceptEverything(veggies)
// Prints 
// Ok, I guess I will eat some broccoli.
// Ok, I guess I will eat some spinach.
// Ok, I guess I will eat some cauliflower.
// Ok, I guess I will eat some broccoflower.