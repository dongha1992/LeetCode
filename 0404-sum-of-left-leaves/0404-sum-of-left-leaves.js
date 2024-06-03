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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    const dfs = (node, isLeft) => {
        if(!node) return 
        if(isLeft && !node.left && !node.right) sum += node.val
        
        node.left && dfs(node.left, true)
        node.right && dfs(node.right, false)
        return sum
    }
dfs(root, false)
   return sum
};