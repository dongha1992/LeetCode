/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
     let cnt = 0;
  for(let i = 0; i <nums.length; i++){
    for(let j=i;j < nums.length; j++){
      if(Math.abs(nums[i] - nums[j]) === k){
        cnt++
      }
    }
  }
  return cnt
};