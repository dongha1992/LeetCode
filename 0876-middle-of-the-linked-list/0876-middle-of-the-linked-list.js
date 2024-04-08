/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let total = 0;
    let current = head;
    while(current){
      current = current.next
      total++;
    }
    
    current = head;
    const mid = Math.floor(total / 2)
    let count = 0;
    while(count < mid){
        current = current.next
        count++
    }
    return current
};