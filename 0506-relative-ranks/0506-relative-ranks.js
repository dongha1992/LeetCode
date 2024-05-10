/**
 * @param {number[]} score
 * @return {string[]}
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
  
  insert({value, index, rank}){
   const node = {value, index, rank}
   this.heap.push(node)
   this.heapifyUp()
  }
  
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
  }
  
  heapifyUp(){
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while(this.hasParent(currentIndex) && this.heap[parentIndex].value < this.heap[currentIndex].value){
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
    
    if(this.heap[nextIndex]?.value < this.heap[leftChildIndex]?.value){
      nextIndex = leftChildIndex
    }
    if(this.heap[nextIndex]?.value < this.heap[rightChildIndex]?.value){
      nextIndex = rightChildIndex
    }
    if(nextIndex !== currentIndex){
      this.swap(currentIndex, nextIndex);
      this.heapifyDown(nextIndex);
    }
  } 
}

var findRelativeRanks = function(score) {
  const myHeap1 = new MaxHeap()
  const myHeap2 = new MaxHeap();
  
  const medal = {0:"Gold Medal", 1:"Silver Medal", 2:"Bronze Medal"}
  
  for(let i = 0; i < score.length; i++){
    myHeap1.insert({value:score[i], index:i, rank:null})
  }

  for(let i = 0; i < score.length; i++){
    const node = myHeap1.delete()
    myHeap2.insert({...node, rank:i})
  }
  
  for(let i = 0; i < score.length; i++){
    const node = myHeap2.delete()
    if(i < 3)score[node.index] = medal[i] 
    else score[node.index] = node.rank + 1 + ""
  }
  
  return score
};