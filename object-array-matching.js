/* Make a function that looks through an array of objects (first argument)
* and returns an array of all objects that have matching name and value pairs (second argument).
* Each name and value pair of the source object has to be present in the object from the collection
* if it is to be included in the returned array. */

function whatIsInAName(collection, source) {

// the .keys function returns an array of every key name in an object
let srcKeys = Object.keys(source);

/*  filter the collection array such that: for every key in the source, 
*   the collection item has that key and the values of the keys match */
return collection.filter(item => srcKeys.every(key => item.hasOwnProperty(key) && item[key] == source[key]))

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });