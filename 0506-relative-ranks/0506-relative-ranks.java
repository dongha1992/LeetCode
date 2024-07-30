import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

class Solution {    
    public String[] findRelativeRanks(int[] score) {
        
        int[] copiedScore = copy(score);
        
        Arrays.sort(copiedScore);
        
        int[] reversed = reverse(copiedScore);
        int[] medalArray = take(reversed, 3);
        
        Map<Integer, Integer> rankMap = new HashMap<>();
        
        for(int i = 0; i < reversed.length; i++){
            rankMap.put(reversed[i], i);
        }
        
        String[] answer = new String[score.length];
        System.out.println(Arrays.toString(score));
        
        for(int i = 0; i < score.length; i++){
            Integer rank = rankMap.get(score[i]);
            
            if(rank < 3){
               Medal medal = Medal.getMedalByIndex(rank);
               answer[i] = medal.getMedal();
            } else {
               answer[i] = String.valueOf(rank + 1);
            }
        }
        
        
        System.out.println(Arrays.toString(medalArray));
        
        return answer;
    }
    
    public static int[] copy(int[] array){
        return Arrays.copyOf(array, array.length);  
    }

    public static int[] take(int[] array, int n){
        if(n > array.length){
            return Arrays.copyOf(array, array.length);
        }
        
        return Arrays.copyOf(array, n);
    }
    
    public static int[] reverse(int[] array){
        int length = array.length;
        int[] reversedArray = new int[length];
        
        for(int i = 0; i < length; i++){
            reversedArray[length - i - 1] = array[i];
        }
        
        return reversedArray;
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