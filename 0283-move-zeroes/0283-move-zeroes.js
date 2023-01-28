/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    /* 버블정렬로 755ms */
    
    // for(let i = 0; i < nums.length-1; i++){
    //   for(let j = 0; j < nums.length-1-i; j++){
    //     if(nums[j] === 0){
    //       [nums[j], nums[j+1]] = [nums[j+1],nums[j]]
    //     }
    //   }
    // }
    
    /* 투 포인터 92ms */
    
//     let j = 0;
//     for(let i = 0; i < nums.length; i++){
//       if(nums[i]!==0){
//         [nums[i],nums[j]] = [nums[j], nums[i]]
//         j++
//       }
//     }
    
     let lt = 0;
  
 for(let i = 0; i < nums.length; i++){
   if(nums[i]){
     nums[lt++] = nums[i]
   }
 }
for(let i = lt; i <nums.length; i++){
  nums[i]= 0
}
  return nums

};