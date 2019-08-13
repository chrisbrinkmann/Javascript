// an array of objects
var watchList = [
                 {  
                   "Title": "Inception",
                   "Year": "2010",
                   "Rated": "PG-13",
                   "imdbRating": "8.8",
                   "imdbVotes": "1,446,708",
                   "imdbID": "tt1375666",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "The Dark Knight",
                   "Year": "2008",
                   "Rated": "PG-13",
                   "imdbRating": "9.0",
                   "imdbVotes": "1,652,832",
                   "imdbID": "tt0468569",
                   "Type": "movie",
                   "Response": "True"
                },
                {
                   "Title": "Avatar",
                   "Year": "2009",
                   "Rated": "PG-13",
                   "imdbRating": "7.9",
                   "imdbVotes": "876,575",
                   "imdbID": "tt0499549",
                   "Type": "movie",
                   "Response": "True"
                }
];

var rating = [];

// create new array with map, pulling info from the original array
rating = watchList.map(x => ({"title":x["Title"], "rating":x["imdbRating"]}));