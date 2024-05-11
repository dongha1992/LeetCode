/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
  let lt = 0;
  let rt = 0;
  let answer= 0;
  
  while(lt < nums.length){
    if(rt === nums.length){
      rt = lt+1
      lt++
    }
    rt++
    if(nums[lt] + nums[rt] < target) answer++
  }
  return answer
};