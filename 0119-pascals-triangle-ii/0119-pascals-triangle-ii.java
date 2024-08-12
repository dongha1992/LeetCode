class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> answer = new ArrayList<>();
        answer.add(1);
        
        if(rowIndex == 0) return answer;
        List<Integer> prev = getRow(rowIndex - 1);
        
        for(int i = 0; i < prev.size()-1; i++){
            answer.add(prev.get(i) + prev.get(i+1));
        }
        
        answer.add(1);
        
        return answer;        
    }
}