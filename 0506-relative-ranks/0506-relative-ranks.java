import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

class Solution {    
    public String[] findRelativeRanks(int[] score) {
        MaxHeap myHeap1 = new MaxHeap();
        MaxHeap myHeap2 = new MaxHeap();
        // List<Node> rankedList = new ArrayList<>();
        String[] answer = new String[score.length];
        
        for(int i = 0; i < score.length; i++){
            myHeap1.insert(score[i], i, -1);
        }
        
        for(int i = 0; i < score.length; i++){
            Node node = myHeap1.delete();
            myHeap2.insert(node.value, node.index, i);
        }
        
        for(int i = 0; i < score.length; i++){
            Node node = myHeap2.delete();
            
            if(i < 3){
              answer[node.index] = Medal.getMedalByIndex(i).getMedal();
            } else {
              answer[node.index] = String.valueOf(node.rank + 1);
            }
        }
        
        return answer;
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
    int rank;
    
    Node(int value, int index, int rank){
        this.value = value;
        this.index = index;
        this.rank = rank;
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
    
    
    public void insert(int value, int index, int rank){
        Node node = new Node(value, index, rank);
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
            System.out.println("Value: " + node.value + ", Index: " + node.index + ", Rank: " + node.rank);
        }
    }
}

