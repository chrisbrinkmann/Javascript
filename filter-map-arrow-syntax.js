var watchList = [
    {
        "Title": "Inception",
        "imdbRating": "8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "imdbRating": "6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "imdbRating": "9",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    }

];

/*
* Our original soulution uses filter and map in one line to pass the test.
*
* var filteredList = watchList.filter(function (x) { return parseInt(x.imdbRating) >= 8 }).map((x) => ({ "title": x["Title"], "rating": x["imdbRating"] }));
*
* We will perform similar operations using different syntax to demonstrate similar functionality with different syntax.
*
*/


// Using filter with Anonymous function classic syntax - filter the list of any object whose imdbRating is < 8 (removes Interstellar)
var filteredList = watchList.filter(function (x) { return parseInt(x.imdbRating) >= 8 });

console.log(filteredList[1].Title); // should print: The Dark Knight
console.log(filteredList[1].Type); // should print: movie

/* Using map with Anonymous function arrow syntax - 
*  maps each element to a smaller object containing only "title" and "rating" properties;
*/
filteredList = filteredList.map(x => ({ "title": x["Title"], "rating": x["imdbRating"] }));
// why do I need to wrap my arrow function body in parenthesis?

console.log(filteredList[1].Type); // should print undefined

// Note that our list object attributes names have been changed to "title" and "rating"

// Using filter with Explicit function classic syntax - filter the list of any object whose imdbRating is < 9 (removes Inception)
function filterFunc(item) {
    return parseInt(item.rating) >= 9;
}

filteredList = filteredList.filter(filterFunc);

console.log(filteredList[0].title); // should print: The Dark Knight


// Explicit function with arrow syntax - redefine the object properties in the list.
var arrowFunc = () => ({ "description": "movie", "title": "The Big Lebowski"});

filteredList = filteredList.map(arrowFunc);

console.log(filteredList[0].description); // should print: movie
console.log(filteredList[0].title); // should print: The Big Lebowski
