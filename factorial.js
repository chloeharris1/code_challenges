// Code Challenges: Arrays, Loops, Objects, Iterators

// TODO: Write a function factorial() that takes a number as an argument and returns the factorial of the number

const factorial = (num) => {
    // Variable which will hold the value of the calculation performed in the for loop. Setting the initial value to 1 makes the algorithm simpler because 6*1 = 6, then the second time the for loop runs, it will do 6*5, then 6*4 etc. 
    let result = 1;
    // Using a for loop to decrement the number argument while the number is greater than 0
    for (let i=num; i>0; i--) {
    //   Multiplying the result by the number argument passed into the factorial function 
      result*=i;
    } return result
    };
    
    console.log(factorial(6))
    // returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 