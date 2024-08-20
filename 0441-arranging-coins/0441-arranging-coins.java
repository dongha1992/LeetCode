class Solution {
    public int arrangeCoins(int n) {
        long low = 1;
        long high = n;    
        
        while(low <= high) {
            long mid = ((low + high) / 2);
            long sum = mid * (mid+1) / 2;
            
            if(sum == n) {
                return (int) mid;
            } else if(sum < n) {
              low =  mid +1;        
            } else {
              high =  mid -1;
            }
        }
        
        return (int) high;
    }
}




