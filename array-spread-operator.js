// ES6: Use the Spread Operator to Evaluate Arrays In-Place

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
arr1[0] = "asdf";
console.log(arr2); // the spread operator (...) copies the contents of an array into comma separated arguments

// notice arr2 is not changed when we change an element in arr1