class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> answer = new ArrayList<>();
    
        
        for(int i = 1; i <= numRows; i++){
            List<Integer> sub = new ArrayList<>();
            sub.add(1);
            
            if(i > 2) {
                List<Integer> prev = answer.get(i - 2);
                for(int j = 1; j < i - 1; j++){
                    int val = prev.get(j - 1) + prev.get(j);
                    sub.add(val);
                }
            }
            
            if(i > 1){
                sub.add(1);
            }
            
            answer.add(sub);

        }
        
        return answer;
    }
}

