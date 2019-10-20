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
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
   // counters
    let balanced = 0
    let balancedCount = 0
    
    // loop thru the balanced string
    for(let i = 0; i < s.length; i++){
        // use each found letter to inc/dec the balanced counter
        if (s[i] === 'R') {
            balanced++
        }
        
        if (s[i] === 'L') {
            balanced--
        }
        
        // when balanced is 0 we have found a balanced substring
        if(balanced === 0){
            // increment the counter and keep going
            balancedCount++
        }
    }
    
    return balancedCount
};
