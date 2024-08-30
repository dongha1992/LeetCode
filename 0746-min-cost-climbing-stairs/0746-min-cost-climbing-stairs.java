class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int[] dp = new int[cost.length + 1];
        dp[0] = cost[0];
        dp[1] = cost[1];
        
        for(int i = 2; i <= cost.length; i++){
            int c = i == cost.length ? 0 : cost[i];
            dp[i] = Math.min(dp[i - 1] + c, dp[i-2] + c);
        }
        return dp[cost.length];
    }
}