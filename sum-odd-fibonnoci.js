/*
Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
    //accumulator result
    let sum = 0;

    //loop thru fibonocci numbers up to max(num)
    for (let i = 0; fib(i) <= num; i++) {

        //if odd, add to accumulator
        if (fib(i) % 2 == 1) {
            sum += fib(i);
        }
    }

    return sum;
}

// returns the fibonocci sequence number at the index parameter
function fib(index) {
    if (index <= 1) {
        return 1;
    }
    return fib(index - 1) + fib(index - 2);
}
