/* Intermediate Algorithm Scripting: Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

function sumPrimes(num) {
    let result = 0;

    //loop thru all numbers up to max
    for (let i = 1; i <= num; i++) {
        //if number is prime add to the accumulator
        if (isPrime(i)) {
            result += i;
        }
    }

    return result;
}

// returns true if provided arg is prime, false if not
function isPrime(num) {
    // numbers <= 1 are not prime
    if (num <= 1) {
        return false;
        // 2 is prime
    } else if (num == 2) {
        return true;
    } else {
        // test for primacy using remainder operator by looping thru all possible divisors of num up to num / 2
        for (let i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}

sumPrimes(10);