/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let memo = {};

for (let i = 0; i < nums.length; i++) {
  const x = nums[i];
  if (memo[x]) {
    memo[x]++;
  } else {
    memo[x] = 1;
  }
}
const cnt = Object.values(memo);
let index = 0;

for (let i = 0; i < cnt.length; i++) {
  if (cnt[i] % 2 !== 0) {
    index = i;
  }
}
return Number(Object.keys(memo)[index]);

};