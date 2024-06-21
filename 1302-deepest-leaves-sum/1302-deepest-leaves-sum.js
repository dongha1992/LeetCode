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
var deepestLeavesSum = function(root) {
    if(!root) return 0;
    
    let sumMap = {};
    
    const dfs = (node, l) => {
        if(!node) return 0;
        sumMap[l] = (sumMap[l] || 0) + node.val;
        dfs(node.left, l+1)
        dfs(node.right, l+1)
    }
    
    dfs(root, 0);
    const toArraySumMap = Object.values(sumMap)
    return toArraySumMap[toArraySumMap.length - 1]
};