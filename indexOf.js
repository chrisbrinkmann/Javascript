/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
@param - an aray with 2 elements */

function mutation(arr) {

    var arr1 = arr[1].toLowerCase();
    var arr0 = arr[0].toLowerCase();

    // loop thru chars the 2nd element in the array
    for (var i = 0; i < arr1.length; i++) {
        // if the first array's indexOf function fails (returns -1) on any of the chars, then return false
        if (arr0.indexOf(arr1[i]) < 0)
            return false;
    }
    return true;

}