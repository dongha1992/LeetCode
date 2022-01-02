/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const format = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
const arr = format.split("")
const reversed = arr.slice().reverse()
for(let i = 0; i < arr.length; i++){
  if(arr[i]!==reversed[i]){
    return false
  } 
}
  return true
};