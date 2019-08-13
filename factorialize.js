function factorialize(num) {
    let result = 1;

    while (num > 0) {
        result *= num;
        num--;
    }

    return result;
}

/* recursive solution
function factorialize(num) {
    if (num === 0) {
        return 1;
    }

    return num * factorialize(num - 1);
}
*/