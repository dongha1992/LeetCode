/**
 * @param {number[][]} grid
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
}

var deleteGreatestValue = function(grid) {
  const heaps = []
  let answer = 0;
  
  for(let i = 0; i < grid.length; i++){
    let heap = new MaxHeap()
    for(let j=0; j < grid[i].length; j++){
      const g = grid[i][j]
      heap.insert(g)
    }
    heaps.push(heap)
  }
  
  let cnt = 0;
  
  while(cnt <= grid[0].length){
    const nums = []
    for(let i = 0; i < heaps.length; i++){
      const h = heaps[i]
     if(!h.heap.length) return answer
      nums.push(h.delete()) 
    }
    const max = Math.max(...nums)
    answer += max
    cnt++
  }
  
  return answer
};