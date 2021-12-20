/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let firstIndex = 0
  let lastIndex = nums.length -1
  
  while(firstIndex <= lastIndex) {
    let midIndex = Math.floor((firstIndex + lastIndex)/2)
    let guessNumber = nums[midIndex]
    
    if(guessNumber === target){
      return midIndex
    } else if(guessNumber > target){
      lastIndex = midIndex - 1
    } else {
      firstIndex = midIndex + 1
    }
  }
return firstIndex
};