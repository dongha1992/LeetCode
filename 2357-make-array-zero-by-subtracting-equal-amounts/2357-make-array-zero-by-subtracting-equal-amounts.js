/**
 * @param {number[]} nums
 * @return {number}
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

  clearAll(){
    this.heap = []
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

var minimumOperations = function (nums) {
  const myHeap = new MinHeap();
  let answer = 0;
  addToHeap(myHeap, nums)

  while (!nums.every((n) => n === 0)) {
    const min = myHeap.delete();
    nums = getNewNumbers(nums, min);
    myHeap.clearAll()
    addToHeap(myHeap, nums)
    answer++;
  }
  return answer;
};

function addToHeap(heap, nums){
   nums.forEach((n) => {
    if (n) heap.insert(n);
  });
}

function getNewNumbers(nums, min) {
  return nums.map((n) => {
    if (n - min >= 0) return n - min;
    else return n;
  });
}
