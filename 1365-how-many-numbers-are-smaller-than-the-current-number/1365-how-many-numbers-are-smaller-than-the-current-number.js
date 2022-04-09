/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
     let cnt = 0;
  let cntOfBigger = 0
  const answer = []
  
  while(cnt < nums.length){
    for(let i = 0; i < nums.length; i++){ 
      const curNum = nums[cnt]
      if(curNum > nums[i]){
        cntOfBigger++
      }
  }
    answer.push(cntOfBigger)
    cntOfBigger=0
    cnt++
  }
return answer
};