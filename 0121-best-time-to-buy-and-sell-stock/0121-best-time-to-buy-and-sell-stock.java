class Solution {
    public int maxProfit(int[] prices) {
        int answer = 0;
        int min = prices[0];
        
        for(int i = 1; i < prices.length; i++){
            min = Math.min(prices[i], min);
            answer = Math.max(answer, prices[i] - min);
        }
        return answer;
    }
}