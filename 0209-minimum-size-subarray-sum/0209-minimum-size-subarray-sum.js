/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let lt = 0;
  let sum = 0;
  let answer = Infinity
  
for(let rt = 0; rt < nums.length; rt++){
  sum += nums[rt];
  while(sum >= target){
    if(rt-lt+1 < answer){
    answer = rt-lt+1
   }
    sum -= nums[lt++]
  }

}

  return answer === Infinity ? 0 : answer;
};