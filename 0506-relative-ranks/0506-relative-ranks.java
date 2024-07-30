import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

class Solution {    
    public String[] findRelativeRanks(int[] score) {
        int maxRank = 3;
        
        int[] copiedScore = Arrays.copyOf(score, score.length);  
        
        Arrays.sort(copiedScore);
        
        int[] reverseSorted = reverse(copiedScore);
        
        Map<Integer, Integer> rankMap = getRankMap(reverseSorted);
        
        String[] answer = new String[score.length];
        
        for(int i = 0; i < score.length; i++){
            Integer rank = rankMap.get(score[i]);
            
            if(rank < maxRank){
               answer[i] =  Medal.getMedalByIndex(rank).getMedal();
            } else {
               answer[i] = String.valueOf(rank + 1);
            }
        }
        
        
        return answer;
    }
    

    public static int[] reverse(int[] array){
        int length = array.length;
        int[] reversedArray = new int[length];
        
        for(int i = 0; i < length; i++){
            reversedArray[length - i - 1] = array[i];
        }
        
        return reversedArray;
    }
    
    public static Map<Integer, Integer> getRankMap(int[] reverseSorted){
        Map<Integer, Integer> rankMap = new HashMap<>();
        
        for(int i = 0; i < reverseSorted.length; i++){
            rankMap.put(reverseSorted[i], i);
        }
        return rankMap;
    }
    
        
    public enum Medal {
        GOLD("Gold Medal"), 
        SILVER("Silver Medal"), 
        BRONZE("Bronze Medal");
        
        private final String medal;

        Medal(String medal){
            this.medal = medal;
        }

        public String getMedal(){
            return medal;
        }

        public static Medal getMedalByIndex(int index){
            switch(index){
                case 0:
                    return GOLD;
                case 1:
                    return SILVER;
                case 2:
                    return BRONZE;
                default:
                    throw new IllegalArgumentException("존재하지 않은 순위" + index);
            }
        }
    
    }

}