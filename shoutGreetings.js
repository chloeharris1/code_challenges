// Code Challenges: Intermediate JavaScript - shoutGreetings()

// TODO: Write a function that takes an array of strings and returns a new array. The new array should contain all of the strings capitalized with an exclamation point appended to the end

// map(), forEach(), or a for loop could be used to loop through the array, but since map() returns a new array and forEach() does not, map() is my preferred method for this task. Map() also allows you to chain other methods onto it (forEach() does not) and I know I need to use the toUpperCase method to change the strings in the array to uppercase letters.  

// shoutGreetings takes in an array as a parameter
const shoutGreetings = greetings => {
    // Return a new array using the map() method. Passing in a function to convert the strings to uppercase, using the toUpperCase() method and appends an exclamation point to the end of each string
    return greetings.map(greeting => greeting.toUpperCase() + '!')}
    

    // greetings array of strings
    const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
    
    // Invoking shoutGreetings function that takes in the greetings array as an argument 
    console.log(shoutGreetings(greetings))
    // Prints [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]