/*Question 1
  Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
  make a function that organizes these into individual array that is ordered.
  For example answer(ArrayFromAbove) should return:
  [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]*/

// param: an array of numbers
// return: a sorted array(low to high) with duplicate numbers grouped in sub arrays
function cleanRoom(arr){
	let copy = [].concat(arr) // copy array so we don't change original

	copy.sort( (a, b) => a - b) // sory it low to high

	copy.forEach(function(elem, index){
		if(elem === copy[index + 1]){ // if the next elem is the same as current
			 let subArr = [elem] // make a new array with the only the current elem
			 while(elem === copy[index + 1]){ // while next elem === current
			 	subArr.push(...copy.splice(index + 1, 1)) // splice out next elem and add it to subArr
			 }
			 copy.splice(index, 1, subArr); // replace the current elem with subArr
			}
		})

	return copy
}

/*Question 2
  Write a javascript function that takes an array of numbers and a target number.
  The function should find two different numbers in the array that, when added together, give the target number.
  For example: answer([1,2,3], 4)should return [1,3]*/

// param: an array of numbers, the target sum
// return: an an array containing 2 elements from the array arg that sum to the target sum
function targetSum(arr, sum){
	let result = [];

	/*we use nested loops to compare elements and search for a matching sum*/

	arr.find((elem, index) => { // use find for out loop
		for(let i = 0; i < arr.length; i++){ // use for for inner loop
			if(index !== i && elem + arr[i] === sum){ // check if 2 differnt elems sum match arg
				result.push(elem, arr[i]) // if we find a match put the elems in result
				return true // stop searching
			}
		}
	})
	return result
}
