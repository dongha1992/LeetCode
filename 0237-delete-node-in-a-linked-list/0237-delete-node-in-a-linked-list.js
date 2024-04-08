/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let current = node
    let previous = null;
    while(current){
        if(current.val === node.val){
            if (previous === null) {
                node.val = node.next.val;
                node.next = node.next.next;
            } else {
                previous.next = current.next; 
            }
            break;
        }
        previous = current
        current = current.next;
    }
    
};