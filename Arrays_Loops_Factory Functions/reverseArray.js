// Code Challenges: Intermediate JavaScript - ReverseArray()

//TODO: Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order. There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. 

// I want to take the last element of the array, then add it to the newArray. 
// To do this I'll need to loop through the array from the end to the beginning, because I want the last element to be first.
// I want to output the contents of 'newArray' when the for loop is finished.


const reverseArray = arr => {
    // Create empty array to fill up later
    let newArray = [];
    // To start at the end of the array I want to set i equal to the length of the array minus 1, since the index of an array always starts at zero.
    for (let i = arr.length -1; i >= 0; i-- ) {
    // use the .push() method to ‘push’ arr[i] to the end of the newArray.
      newArray.push(arr[i]);
    }
    // Return the newArray with the strings in the correct order
    return newArray;
  }
  
  // Array of strings that the function will loop through 
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];

  // Console.log with the sentence array as an argument 
  
  console.log(reverseArray(sentence)) 
  // // Should print ['This', 'will', 'all', 'make', 'sense.'];
  
  