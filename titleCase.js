/* Makes a string title case
/ @param - a string in any case
/ @return - a title case string */

function titleCase(str) {
    return str.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
}

/* Explanation - first we use the string function .toLowerCase() to force all letters lower case.
/ Next we use the string function .split(' ') to get an array of each word in the original string.
/ Next we use the array .map() function to operate on each word (element) in the array:
/   .map(x => x[0].toUpperCase() + x.slice(1)) concatenates the uppercase first letter with
/   the remainder of the string for each word in the array.
/ Finally we rejoin the array into a string with join(' ') */