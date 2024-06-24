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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let sum = 0;
    
    const dfs = (node) => {
        if(!node) return 0;
        dfs(node.right);
        sum += node.val
        node.val = sum
        dfs(node.left)
        return node
    }
    return dfs(root)
    
};