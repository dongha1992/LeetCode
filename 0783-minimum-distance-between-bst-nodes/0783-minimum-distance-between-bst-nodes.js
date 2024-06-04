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
var minDiffInBST = function(root) {
    let minimum = Infinity;
    let path = []
    
    const dfs = (node) => {
        if(!node) return 0;
        
        if(node.left) dfs(node.left)
        const diff = node.val- path[path.length - 1]
        if(diff < minimum) minimum = diff
        path.push(node.val)
        if(node.right) dfs(node.right)
    
    }
    dfs(root)
    return minimum
    
};