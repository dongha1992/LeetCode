/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
 let lt = m-1;
 let rt = n-1
 let i = m+n-1
  
 while(lt >= 0 && rt >= 0){
   if(nums1[lt] <= nums2[rt]){
     nums1[i] = nums2[rt]
     rt--
   } else {
     nums1[i] = nums1[lt]
     lt--
   }
   i--
 }
  while(rt >= 0){
    nums1[i] = nums2[rt]
    rt--;
    i--
  }

  return nums1
};