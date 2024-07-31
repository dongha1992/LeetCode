import java.util.PriorityQueue;
import java.util.List;
import java.util.ArrayList;

class KthLargest {
    private PriorityQueue<Integer> minHeap;
    private int k;
    
    public KthLargest(int k, int[] nums) {
        this.k = k;
        this.minHeap = new PriorityQueue<>();
        
        for(int n : nums){
          this.add(n);
        }      
    }
    
    public int add(int val) {   
        this.minHeap.offer(val);
        
        while(this.minHeap.size() > this.k) this.minHeap.poll();
        
        return this.minHeap.peek();
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */