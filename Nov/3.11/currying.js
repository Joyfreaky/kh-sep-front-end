// Path: Nov/3.11/currying.js
// Currying is the process of transforming a function that takes multiple arguments into a function that takes them one at a time.

// Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument.

function add(x) {
    return function(y) {
      return x + y;
    }
  }
  
  console.log(add(3)(4));
  
  // The add function takes one argument, x, and returns a new function.
  
  // The new function takes a second argument, y, and returns the sum of x and y.
  
  // The add function is called with 3 as the argument, and returns a new function.
  
  // The new function is called with 4 as the argument, and returns the sum of 3 and 4.