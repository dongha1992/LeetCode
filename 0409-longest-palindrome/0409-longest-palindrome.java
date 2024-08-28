class Solution {
    public int longestPalindrome(String s) {
        HashSet<Character> hashSet = new HashSet<>();
        int answer= 0;
        
        for(int i = 0; i < s.length(); i++){
            if(hashSet.contains(s.charAt(i))){
                hashSet.remove(s.charAt(i));
                answer += 2;
            } else {
                hashSet.add(s.charAt(i));   
            }
        }
        if(!hashSet.isEmpty()) return answer + 1;
        return answer;
    }
}