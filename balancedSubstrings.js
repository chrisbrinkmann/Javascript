/**
Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

Example 1:
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:
Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

Example 3:
Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
 
Constraints:
1 <= s.length <= 1000
s[i] = 'L' or 'R'

*/

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
   // counters
    let Rs = 0
    let Ls = 0
    let balancedCount = 0
    
    // loop thru the balanced string
    for(let i = 0; i < s.length; i++){
        // add each letter ecountered to appropriate counter
        if (s[i] === 'R') {
            Rs++
        }
        
        if (s[i] === 'L') {
            Ls++
        }
        
        // once we have the same number we have found a balanced substring
        if(Rs > 0 && Rs === Ls){
            // if the total of Rs and Ls is the length of the original string
            if(Rs + Ls === s.length) {
                // then we just return 1 since the original string is the only balanced substring
                return 1
            }
            // otherwise add 1 to the counter of found balanced substrings
            balancedCount++
            
            // and reset the Rs and Ls counters to 0 to begin looking for the next balanced substring
            Rs = 0
            Ls = 0
        }
    }
    
    return balancedCount
};
