/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
  const newNums = nums.sort((a, b) => a - b)
  const result = []
  for(let i = 0; i < newNums.length; i++){
    if(newNums[i]===target){
      result.push(i)
    }
  }
return result
};