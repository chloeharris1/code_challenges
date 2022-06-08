// Code Challenges: Intermediate JavaScript - ConvertToBaby()

// TODO: Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '. Not allowed to use map().

const convertToBaby = arr => {
  // Creating a new array which will hold the array of baby animals
    let babyArr = [];
    // for loop that will loop through the animals array 
    for(let i = 0; i < arr.length; i++) {
    // using the push() method to push each animal into the babyarr 'baby' is prepended to each string 
    babyArr.push('baby ' + arr[i]);
    }
    // Return the array of baby animals 
    return babyArr;
  }
  

  // Array of animals to be passed into the convertToBaby function 
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  // covertToBaby function takes in the animals array as an argument 
  console.log(convertToBaby(animals)) 