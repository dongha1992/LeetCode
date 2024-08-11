class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> dp = new ArrayList<>();
    
        for(int i = 0; i < numRows; i++){
            List<Integer> row = new ArrayList<>(Collections.nCopies(i+1, 1));
            for(int j =1; j < i; j++){
                row.set(j, dp.get(i-1).get(j-1) + dp.get(i-1).get(j));
            }
           dp.add(row);
        }
        
        return dp;
    }
}

