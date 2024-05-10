/**
 * @param {number[]} gifts
 * @param {number} k
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
  peek = () => this.heap[0] ? this.heap[0] : null;
  
  insert(value){
   const node = value
   this.heap.push(node)
   this.heapifyUp()
  }
  
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
  }
  
  heapifyUp(){
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while(this.hasParent(currentIndex) && this.heap[parentIndex] < this.heap[currentIndex]){
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex =  this.getParentIndex(currentIndex);
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
    let leftChildIndex = this.getLeftChildIndex(currentIndex);
    let rightChildIndex = this.getRightChildIndex(currentIndex);
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
  sum(){
    return this.heap.reduce((acc, cur) => acc+cur)
  }
}

var pickGifts = function(gifts, k) {
  const myHeap = new MaxHeap()
  
  for(let i = 0; i <gifts.length; i++){
    myHeap.insert(gifts[i])
  }
  
  for(let i = 0; i < k; i++){
    const node = myHeap.delete()
    const result = parseInt(Math.sqrt(node))
    myHeap.insert(result)
  }
  
  return myHeap.sum()
};