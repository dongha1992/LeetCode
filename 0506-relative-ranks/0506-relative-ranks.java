import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

class Solution {    
    public String[] findRelativeRanks(int[] score) {
        MaxHeap myHeap = new MaxHeap();
        String[] answer = new String[score.length];
        
        for(int i = 0; i < score.length; i++){
            myHeap.insert(score[i], i);
        }
        
        // Map<Integer, Integer> rankMap = getRankMap(myHeap, score.length);
        
        for(int i = 0; i < score.length; i++){
            Node node = myHeap.delete();
            // int rank = node;
            
            if(i < 3){
              answer[node.index] = Medal.getMedalByIndex(i).getMedal();
            } else {
              answer[node.index] = String.valueOf(i + 1);
            }
        }
        
        return answer;
    }

    public static Map<Integer, Integer> getRankMap(MaxHeap myHeap, int n){
        Map<Integer, Integer> rankMap = new HashMap<>();
        
        for(int i = 0; i < n; i++){
            Node node = myHeap.delete();
            rankMap.put(node.value, i);
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
        
class Node {
    int value;
    int index;

    Node(int value, int index){
        this.value = value;
        this.index = index;
    }
}

class MaxHeap {
    private List<Node> heap;
    
    public MaxHeap(){
        this.heap = new ArrayList<>();
    }
    
    private int getLeftChildIndex(int parentIndex) {
        return parentIndex * 2 + 1;
    }

    private int getRightChildIndex(int parentIndex) {
        return parentIndex * 2 + 2;
    }
    
    private int getParentIndex(int childIndex) {
        return (childIndex - 1) / 2;
    }
    
    private Node peek(){
        return heap.isEmpty() ? null : heap.get(0);
    }
    
    private boolean hasParent(int index) {
        return getParentIndex(index) >= 0;
    }
    
    public int size(){
        return heap.size();
    }
    
    public void insert(int value, int index){
        Node node = new Node(value, index);
        heap.add(node);
        heapifyUp();
    }
    
    private void swap(int index1, int index2){
        Node temp = heap.get(index1);
        heap.set(index1, heap.get(index2));
        heap.set(index2, temp);
    }
    
    private void heapifyUp() {
        int currentIndex = heap.size() - 1;
        
        while(hasParent(currentIndex)){
            int parentIndex = getParentIndex(currentIndex);
            if(heap.get(parentIndex).value < heap.get(currentIndex).value){
                swap(parentIndex, currentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }
    
    public Node delete(){
        if(heap.isEmpty()){
            return null;
        }
        
        Node max = heap.get(0);
        Node last = heap.remove(heap.size() - 1);
        
        if (!heap.isEmpty()) {
            heap.set(0, last);
            heapifyDown();
        }
        
        return max;
    }
    
    private void heapifyDown(){
        int currentIndex = 0;
        int count = heap.size();
        
        while(true){
            int leftChildIndex = getLeftChildIndex(currentIndex);
            int rightChildIndex = getRightChildIndex(currentIndex);
            int largestIndex = currentIndex;
            
            if(leftChildIndex < count && heap.get(leftChildIndex).value >  heap.get(largestIndex).value){
                largestIndex = leftChildIndex;
            }
            
            if (rightChildIndex < count && heap.get(rightChildIndex).value > heap.get(largestIndex).value) {
                largestIndex = rightChildIndex;
            }
            
            if (largestIndex != currentIndex) {
                swap(currentIndex, largestIndex);
                currentIndex = largestIndex;
            } else {
                break;
            }
        }
    }
    
     public void printHeap() {
        for (Node node : heap) {
            System.out.println("Value: " + node.value + ", Index: " + node.index);
        }
    }
}

