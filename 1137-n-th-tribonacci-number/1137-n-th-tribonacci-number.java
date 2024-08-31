class Solution {
    private int[] memo;
    
    public int tribonacci(int n) {
        memo = new int[n + 1];
        
        return recur(n);
    }
    
    public int recur(int n){
        if(n == 0) return 0;
        if(n == 1 || n == 2) return 1;
        
        if(memo[n] != 0) return memo[n];
        
        memo[n] = recur(n - 1) + recur(n - 2) + recur(n - 3);
        return memo[n];
    }
}