class Solution {
    public boolean isValid(String s) {
        Stack<Character> stackStr = new Stack<>();
        
        for(int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            boolean isOpenChar = (c == '(' || c == '[' || c == '{');
            
            if(isOpenChar) stackStr.push(c);
            else {
                if(stackStr.isEmpty() || !isMatchingPair(stackStr.pop(), c)) return false;
            }
        }
        return stackStr.isEmpty();
    }
    
    private boolean isMatchingPair(char open, char close){
        return (open == '(' && close == ')') ||
               (open == '[' && close == ']') ||
               (open == '{' && close == '}');
    }
}