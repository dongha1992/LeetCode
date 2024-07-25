class Solution {
    public int balancedStringSplit(String s) {
        int lt = 0;
        int answer = 0;
        int cnt = 0;
        
        while(lt < s.length()){
            if(s.charAt(lt) == 'L') cnt++;
            else if(s.charAt(lt) == 'R') cnt--;
            
            if(cnt == 0) answer++;
            lt++;
        }
        return answer;
    }
}