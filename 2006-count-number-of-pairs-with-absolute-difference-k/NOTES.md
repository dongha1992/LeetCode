- 2중 for문 대신 hash map으로 


const countKDifference = function (nums, k) {
  let temp = {};
  /*count the number of times the number repeats in 'nums' array
	and add that to 'temp' object*/
  for (let i = 0; i < nums.length; i++) {
    if (temp[nums[i]]) {
      temp[nums[i]]++;
    } else {
      temp[nums[i]] = 1;
    }
  }

  /*count the number of times the difference exists*/
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (temp[nums[i] + k]) {
      count += temp[nums[i] + k];
    }
  }
  return count;
};
