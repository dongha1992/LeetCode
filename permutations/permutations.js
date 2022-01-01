/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = []

  if(nums.length === 0) return []
  if(nums.length === 1) return [nums]
  
  nums.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
    const permuted = permute(rest)
    const attached = permuted.map(arr => [fixed, ...arr])
    result.push(...attached)
  })
  return result
};