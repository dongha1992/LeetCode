/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const max = Math.max(...nums)
   const count = Array(max + 1).fill(0);
  for(const num of nums) {
    count[num]+= num
  }
  
   const dp = Array(max + 1).fill(0);
  dp[1] = count[1]
  
   for (let i = 2; i <= max; i++) {
     dp[i] = Math.max(dp[i-1], dp[i-2]+count[i])
   }
  
  return dp[max]
};