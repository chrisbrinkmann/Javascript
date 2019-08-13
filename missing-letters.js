/* Intermediate Algorithm Scripting: Missing letters
*  Find the missing letter in the passed letter range and return it.
*  If all letters are present in the range, return undefined.
*  fearNotLetter("abce") should return "d".
*  fearNotLetter("stvwx") should return "u".
*  fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/

function fearNotLetter(str) {
  let result

  for(let i = 0; i < str.length - 1; i++){
    if(str.charCodeAt(i)+1 != str.charCodeAt(i+1)){
      result = String.fromCharCode(str.charCodeAt(i)+1);
    }
  }

  return result;
}

fearNotLetter("abce");