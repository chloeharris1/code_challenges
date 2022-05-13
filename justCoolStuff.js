// Code Challenges: Intermediate JavaScript - JustCoolStuff()

// TODO: Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Function that uses arr1 and arr2 are parameters 
const justCoolStuff = (arr1, arr2) => {
    // Using the filter() and passing in a function that uses the includes() method to return a single array that contains matching words from two arrays
    return arr1.filter(word => 
    arr2.includes(word)
    )
  }
  
// Arrays to be used as arguments for the JustCoolStuff function
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
// The console.log passes in the two arrays as arguments to the JustCoolStuff function's parameters (arr1, arr2) and uses the function call to return matching strings from the two arrays
  console.log(justCoolStuff(myStuff, coolStuff))
  // Prints [ 'fruit-by-the-foot', 'skateboards', 'my room' ]