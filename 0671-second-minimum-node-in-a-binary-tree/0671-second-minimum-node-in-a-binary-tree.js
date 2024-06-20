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
var findSecondMinimumValue = function(root) {
    const minimumNumbers = [];
    const arraySet = new Set();
    
    const dfs = (node) => {
        if(!node) return 
        dfs(node.left)
        arraySet.add(node.val)
        dfs(node.right)
    }
    dfs(root)
    return [...arraySet].sort()[1] ?? -1
};