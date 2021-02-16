/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
    for(let i=0; i < (s.length - i); i++){
        let hold = s[i];
        s[i] = s[(s.length - 1) - i];
        s[(s.length - 1) - i] = hold;
    }
};