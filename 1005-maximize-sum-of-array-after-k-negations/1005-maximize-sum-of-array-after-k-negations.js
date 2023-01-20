/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
   nums.sort((a,b)=>a-b)
   while(k){
     nums[0] = (0 - nums[0])
     nums.sort((a,b)=>a-b)
     k--
  }
  
  return nums.reduce((a, b) => a+b,0)
}