/* returns an array consisting off the largest numbers from each sub array
/ @param - a 2 dimensional array of numbers
/ @return - a 1 dimensional array of the highest numbers in each sub array of the original */

// normal solution
function largestOfFour(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let largestNum = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largestNum) {
                largestNum = arr[i][j];
            }
        }
        result.push(largestNum);
    }
    return result;
}

/* aspie solution

function largestOfFour(arr) {
    return arr.map(function (group) {
        return group.reduce(function (prev, current) {
            return (current > prev) ? current : prev;
        });
    });
}

*/


/*full retard solution

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

*/