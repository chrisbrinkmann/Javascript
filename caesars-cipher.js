/* Caesars Cipher aka shift cipher - ROT13
/ The values of all letters are shifted by 13 places 
/ This implementation only works for uppercase and
/ passes any none letters thru unchanged. 
/ @param - string - the string you want to apply the cipher to.
/ @return - string - the shift cipher */
function rot13(str) {

    // spread the original string into an array
    const strArray = [...str]

    // create empty string var to build result in
    var result = "";

    /* iterate over the array and apply the cipher rule to each character,
    /  appending each new character to the result variable*/
    var i;
    for (i = 0; i < strArray.length; i++) {
        switch (strArray[i]) {
            case "A":
                result += "N"
                break;
            case "B":
                result += "O"
                break;
            case "C":
                result += "P"
                break;
            case "D":
                result += "Q"
                break;
            case "E":
                result += "R"
                break;
            case "F":
                result += "S"
                break;
            case "G":
                result += "T"
                break;
            case "H":
                result += "U"
                break;
            case "I":
                result += "V"
                break;
            case "J":
                result += "W"
                break;
            case "K":
                result += "X"
                break;
            case "L":
                result += "Y"
                break;
            case "M":
                result += "Z"
                break;
            case "N":
                result += "A"
                break;
            case "O":
                result += "B"
                break;
            case "P":
                result += "C"
                break;
            case "Q":
                result += "D"
                break;
            case "R":
                result += "E"
                break;
            case "S":
                result += "F"
                break;
            case "T":
                result += "G"
                break;
            case "U":
                result += "H"
                break;
            case "V":
                result += "I"
                break;
            case "W":
                result += "J"
                break;
            case "X":
                result += "K"
                break;
            case "Y":
                result += "L"
                break;
            case "Z":
                result += "M"
                break;
            default:
                result += strArray[i];
        }
    }

    return result;
}