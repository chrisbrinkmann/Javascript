// a function with no params classic syntax
function one() {
    console.log(1);
}

// a function with params classic syntax
function two(a, b) {
    return a + b;
}

one(); // prints 1
console.log(two(1, 1)); //prints 2

/*
* Arrow Functions - syntax
* There is no function declaration syntax for arrow functions,
* only function expression syntax.. 
*
* - No keyword function
* - No keyword return if function is only 1 statement/expression
* - No brackets if function is only 1 statement/expression
* - No function name unless assigned to a variable
* - No parenthesis if and only if exactly 1 parameter
*/

/*
* Ex.1 Calling a named function with no params: Remove function keyword and function name
*   and assign the function to a variable whose name is used to call it.
*/
var three = () => 3;
console.log(three()); //prints 3

/*
* Ex.2 Calling a named function with multiple params
* multiple parameteres require parenthesis wrapping
*/
var four = (a, b) => console.log(a + b);
four(2, 2); // prints 4

/*
* Ex. 3 Calling a function with a single parameter
* No parenthesis needed for params when there is only a single parameter
*/

var five = z => z + 3;
console.log(five(2)); // prints 5

/*
* Ex. 4 Calling a function with multiple statements
* In this case our function has a single parameter 'q', so we do not need parenthesis
* Since the function contains multiple statements rather than simply being a 1 line expression,
* we need to wrap the statements in brackets {} and we need to use keyword 'return'.
*/

var six = q => {
    let num2 = 1;
    return q + num2;
}
console.log(six(5)); //prints 6

