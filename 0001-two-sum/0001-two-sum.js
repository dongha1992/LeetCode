/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   const memo = {}
   
   for(let i = 0; i < nums.length; i++){
     const rest = target - nums[i]
     
     if(rest in memo) {
      return [memo[rest], i]
     }
     memo[nums[i]] = i
  }
};