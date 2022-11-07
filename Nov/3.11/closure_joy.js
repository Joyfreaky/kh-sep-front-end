// Path: Nov/3.11/closure.js
// Almost everything in Javascript is a function.

// Closure is a function that remembers its lexical scope even when the function is executed outside that lexical scope.

function add() {
  var counter = 0;
  function plus() {counter += 1;}
  plus();
  return counter;
}

console.log(add());

// The counter is protected by the scope of the add function, and can only be changed using the plus function.

// The counter is 1

// If you create another instance of add, the counter becomes a separate variable unrelated to the previous counter.

const add2 = add();

console.log(add2);

// The counter is 0

// This is because the counter is a separate variable in the scope of the add2 function.

// The counter is protected by the scope of the add2 function, and can only be changed using the plus function.

// The counter is 1








