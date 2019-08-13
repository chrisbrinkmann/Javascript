/* Intermediate Algorithm Scripting: Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order. */


function uniteUnique(arr) {
  let result = []
  
  // concat all args into one big array
  for(let i = 0; i < arguments.length; i++){
    result = result.concat(arguments[i]);
  }

  // remove duplicate values by filtering only the 1st occurrance of each with indexOf
  return result.filter((first, index) => result.indexOf(first) == index);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);