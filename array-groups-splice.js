/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
@param an array
@param number - the size of the groups you want to split into
@retun a two dimensional array with group size specified by the parameter */

function chunkArrayInGroups(arr, size) {
  let result = [];

  while (arr.length > 0){
    result.push(arr.splice(0,size)); // splice changes original array. create a local copy to avoid.
  }

  return result;
}