/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    const val = root.val
    const stack = [root];
    
    while(stack.length){
        const node = stack.pop()
        if(node.val !== val) return false;
        node.right !== null && stack.push(node.right);
        node.left !== null && stack.push(node.left);
    }
    return true
};