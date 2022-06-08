// The sort() method sorts the elements of an array in place and returns the sorted array. 

// TODO: Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending.


// Passing a function into the sort method to compare the numbers in the years array 

const sortYears = years => years.sort((a,b) => {
// Return the numbers in descending order
return b-a;
  })

// Array of years to be sorted
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]