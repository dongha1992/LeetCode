/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const originArr = x.toString().split('');
  const reversed = originArr.slice().reverse();

  for (let i = 0; i < reversed.length; i++) {
    if (reversed[i] !== originArr[i]) {
      return false;
    }
  }
  return true;

};