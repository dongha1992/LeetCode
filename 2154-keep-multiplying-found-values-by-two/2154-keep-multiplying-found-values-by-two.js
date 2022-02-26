/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
  let doubledNum = original
  for(let i = 0; i < nums.length; i++){
    if(nums.indexOf(doubledNum) > -1){
      doubledNum = doubledNum * 2
    } else {
      return doubledNum
    }
  }
  return doubledNum

};