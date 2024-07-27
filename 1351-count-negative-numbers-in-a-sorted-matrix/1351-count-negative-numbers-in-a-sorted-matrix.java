class Solution {
    public int countNegatives(int[][] grid) {
        int answer = 0;
        
        for(int[] nums: grid){
            answer += nums.length - binarySearch(nums);
        }
        return answer;
    }
    
    public int binarySearch(int[] nums){
        if(nums[0] < 0) return 0;
        if(nums[nums.length-1] >= 0) return nums.length;
        
        int low = 0;
        int high = nums.length - 1;
        int result = 0;
        
        while(low <= high){
            int mid = (int) Math.floor((low + high) / 2);
            
            if(nums[mid] < 0) {
                result = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return result;
    }
}