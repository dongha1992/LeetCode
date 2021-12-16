/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const map = {
  ')': '(',
  '}': '{',
  ']': '[',
};
const stack = [];

for (let i = 0; i < s.length; i++) {
  const canPushInStack = s[i] === '(' || s[i] === '{' || s[i] === '[';

  if (canPushInStack) {
    stack.push(s[i]);
  } else {
    if (stack[stack.length - 1] === map[s[i]]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
}
return stack.length === 0 ? true : false;
    
};