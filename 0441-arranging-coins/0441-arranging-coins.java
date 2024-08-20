class Solution {
    public int arrangeCoins(int n) {
//         int low = 1;
//         int high = n;    
        
//         while(low <= high){
//             int mid = ((low + high) / 2);
            
            
//         }
        int c = 0;
        int row = 0;
        
        while(c < n){
            c++;
            n -= c;
            row++;
        }
        return row;
    }
}