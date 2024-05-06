/**
 * @param {number[]} nums
 * @return {number}
 */


class MaxHeap {
  constructor(){
    this.heap = []
  }
  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);
  hasParent = (index) => this.getParentIndex(index) >= 0;
  
  insert(element){
   const node = element
   this.heap.push(node)
   this.heapifyUp()
  }
  
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
  }
  
  heapifyUp(){
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currentIndex-1) / 2)

    while(this.hasParent(currentIndex) && this.heap[parentIndex] < this.heap[currentIndex]){
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex-1) / 2)
    }
  }
  
  delete(){
    const max = this.heap[0];
    const last = this.heap.pop();
    if(this.heap.length > 0){
      this.heap[0] = last;
      this.heapifyDown()
    }
    return max
  }
  
  heapifyDown(index = 0){
    let currentIndex = index;
    let leftChildIndex = currentIndex * 2 +1;
    let rightChildIndex = currentIndex * 2 +2;
    let nextIndex = currentIndex;
    const count = this.heap.length;
    
    if(this.heap[nextIndex] < this.heap[leftChildIndex]){
      nextIndex = leftChildIndex
    }
    if(this.heap[nextIndex] < this.heap[rightChildIndex]){
      nextIndex = rightChildIndex
    }
    if(nextIndex !== currentIndex){
      this.swap(currentIndex, nextIndex);
      this.heapifyDown(nextIndex);
    }
  } 
}

var maxProduct = function(nums) {
    const myHeap = new MaxHeap()
    for(let i = 0; i < nums.length; i++){
        myHeap.insert(nums[i])
    }
    const max1 = myHeap.delete() - 1
    const max2 = myHeap.delete() - 1
    console.log(max1, max2)
    return max1 * max2
};