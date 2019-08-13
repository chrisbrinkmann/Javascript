// a global Array
var s = [23, 65, 98, 5];

// implementation of array.map() function
Array.prototype.myMap = function (callback) {
    var newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }

    // equivalent solution using thr forEach function
    // this.forEach(a => newArray.push(callback(a)));

    return newArray;
};

/* Explanation of implementation:
* In our map implementation function:
* The myMap function takes 1 param which is a function, which that we named 'callback'.
* The 'callback' function is called on each element in the array and we pass it the element's value
* each time.
*
* Now whenever we want to use the myMap function, we need to pass it another function
* as an argument which will act as the 'callback' param function in myMap.
* The function that we pass to myMap will be executed wherever 'callback' is called.
*/

/*
* Here we call the myMap function and pass it an anonymous function which returns
* the argument doubled. 
*/
var new_s = s.myMap(function (item) {
    return item * 2;
});

/*
* We could also pass it a function that we have defined elsewhere:
* This would have the exact same effect.
* Notice that double takes a parameter, but we do not use parenthesis or
* pass the parameter when we are passing double into myMap
*/

var new_s2 = s.myMap(double);

function double(x) {
    return x * 2;
}
