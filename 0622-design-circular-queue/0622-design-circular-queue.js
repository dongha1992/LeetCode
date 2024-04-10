/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.items = new Array(k);
    this.capacity = k;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if(!this.isFull()){
      this.rear = (this.rear+1) % this.capacity
      this.items[this.rear] = value;
      this.currentLength += 1
      if(this.front === -1){
        this.front = this.rear
      }
      return true
    } else {
      return false
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if(this.isEmpty()){
    return false
    }
    const item = this.items[this.front];
    this.items[this.front] = null
    this.front = (this.front+1) % this.capacity
    this.currentLength -= 1
    if(this.isEmpty()){
      this.front = -1
      this.rear = -1
    }
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(!this.isEmpty()){
      return this.items[this.front] 
    } else {
      return -1
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.items[this.rear] ?? -1
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.currentLength === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.currentLength === this.capacity
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */