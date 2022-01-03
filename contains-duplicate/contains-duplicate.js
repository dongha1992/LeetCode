/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
const target = nums.reduce((acc, cur)=>{
  if(acc[cur]){
    acc[cur] = ++acc[cur]
  } else {
    acc[cur] = 1
  }
  return acc
},{})
return !Object.values(target).every(a=> a===1)


};