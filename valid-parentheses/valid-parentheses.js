/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  parathenses = {'(': ')','[':']','{':'}'};
  for (var i=0, stack=[]; i<s.length;i++) {
    if (parathenses[s[i]]) stack.push(s[i]);
    else if (s[i] !== parathenses[stack.pop()]) return false;
    if (stack.length > s.length - i) return false;
  }
  return stack.length ? false:true;
};