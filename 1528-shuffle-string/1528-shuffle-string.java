class Solution {
    public String restoreString(String s, int[] indices) {
        char[] answer = new char[indices.length];
        
        for(int i = 0; i < indices.length; i++){
            answer[indices[i]] = s.charAt(i);
        }
        
        return new String(answer);
    }
}