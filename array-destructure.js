// ES6: Use Destructuring Assignment to Assign Variables from Arrays

let a = 8, b = 6;
(() => {
  "use strict";

[b,a] = [a,b]; // what is being done here? there have been no arrays declared

})();

// what is the point of the function?
// why are there parenthesis around the function?
// why is there a set of parenthesis following the first?

console.log(a); // should be 6

console.log(b); // should be 8
