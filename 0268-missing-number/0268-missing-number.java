import java.util.Arrays;
import java.util.Collections;

class Solution {
    public int missingNumber(int[] nums) {
        Arrays.sort(nums);
        int low = 0;
        int high = nums.length-1;

        while(low <= high) {
            int mid = (low + high) / 2;

            if(nums[mid] == mid){
               low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return low;
        }
}