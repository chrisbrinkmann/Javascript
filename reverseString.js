/* Basic Algorithm Scripting: Reverse a String
    split("") - string function; splits string into an array using the arg as the split seperator
    reverse() - array function; returns array in reverse order
    join("") - array function; returns a string separated by the arg (default arg is ,) */

function reverseString(str) {
    return str.split("").reverse().join("");
}

