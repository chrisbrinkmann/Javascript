/*
* Compare two arrays and return a new array with any items only found in one of the two given arrays,
* but not both.
* In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var newArr = [];

  arr1.forEach(x => {if (arr2.indexOf(x) == -1){
      newArr.push(x);
    }
  })

  arr2.forEach(x => {if (arr1.indexOf(x) == -1){
      newArr.push(x);
    }
  })

  return newArr;
}

// Better solution
/*
    function diffArray(arr1, arr2) {
      return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item))
    }
*/