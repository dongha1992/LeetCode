/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {


let max = 0;
let result = 0;
const map = {};

for (let i = 0; i < nums.length; i++) {
  const cur = nums[i];
  map[cur] ? map[cur]++ : (map[cur] = 1);
  if (map[cur] > max) {
    max = map[cur];
    result = cur;
  }
}
return result;

};