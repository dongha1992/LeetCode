class Solution {
    public int searchInsert(int[] nums, int target) {
        return binarySearch(nums, target);
    }
    
    public int binarySearch(int[] nums, int target){
        int low = 0;
        int high = nums.length - 1;
        
        while(low <= high){
           int mid = (int) Math.floor((low + high) / 2);
            
            if(nums[mid] < target){
                low = mid + 1;
            } else if(nums[mid] > target){
                high = mid - 1;
            } else {
                return mid;
            }
        }
         return low;
    }
}