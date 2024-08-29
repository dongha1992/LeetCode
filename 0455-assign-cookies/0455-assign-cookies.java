class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        
        int lt = 0;
        int rt = 0;
        int answer = 0;
        
        while(lt < s.length && rt < g.length) {
            if(s[lt] >= g[rt]){
                answer++;
                rt++;
            }
            lt++;
        }
        return answer;
    }
}