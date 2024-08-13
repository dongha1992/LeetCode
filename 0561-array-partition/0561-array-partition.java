class Solution {
    public int arrayPairSum(int[] nums) {
        Arrays.sort(nums);
        int answer = 0;
        
        for (int i = 0; i < nums.length; i += 2) {
            answer += nums[i];
        }
        return answer;
    }
}