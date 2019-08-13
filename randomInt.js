/* returns a random integer between min and max (inclusive)*/
function randomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* 
*  returns a random integer from 1 to 10 inclusive
*  this gives an avg. around 5.5
*/
Math.floor(Math.random() * 10) + 1;

/*
*  returns a random int from 0 to 10,
*  this gives an avg. of 5
*/
Math.floor(Math.random()*11);

/* returns a random integer from 1 to 100 */
Math.floor(Math.random() * 100) + 1;

/* returns a random hex digit as a string*/
(Math.random().toString(16) + "0000").slice(2, 3);

/* returns a random hex color value ("#XXXXXX") as a string*/

"#" + (Math.random().toString(16) + "0000000").slice(2, 8);
/*
From stack overflow - https://www.paulirish.com/2009/random-hex-color-code-snippets/
The standard approach with Math.random() for integers is to multiply by the number
of numbers in the range (here, ffffff + 1 or 16777216) and floor the result.
A constant may be added to set the minimum number.

However, that is not necessary whenever the maximum result is a series of the highest
digit (eg 999 or fff) since a series of those digits can be pinched directly from
beyond the decimal point (or hexadecimal point in this case). In JS this can be done
by converting to a string (of the required radix) and then using .slice().
You do need to account for case of the last several digits being zeros,
as converting to a string will cause these to be lost.
These zeros can just be concatenated on before performing the slice.﻿
*/


/*test averages*/
var avg = 0;
for(let i = 0; i < 10000; i++){
	avg += Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}
avg /= 10000;
console.log(avg);
