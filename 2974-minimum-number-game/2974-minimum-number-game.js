/**
 * @param {number[]} nums
 * @return {number[]}
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  delete() {
    if (this.isEmpty()) return null;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      this.swap(parentIndex, index)
      index = parentIndex;
    }
  }
  
  swap(index1, index2){
    [this.heap[index1], this.heap[index2]] = [
        this.heap[index2],
        this.heap[index1],
      ];
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest === index) break;
      this.swap(smallest, index)
      index = smallest;
    }
  }
}

var numberGame = function(nums) {
    const myMinHeap = new MinHeap()
const answer = []
 for(let i = 0; i < nums.length; i++){
   myMinHeap.insert(nums[i])
 }  

  while(myMinHeap.heap.length){
    let min1 = myMinHeap.delete()
    let min2 = myMinHeap.delete()
    answer.push(min2)
    answer.push(min1)
  }
  return answer
};