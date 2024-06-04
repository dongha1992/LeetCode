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
var isBalanced = function(root) {
    let answer = true
    const dfs = (node, l) => {
        if(!node) return 0;
        
        const left = dfs(node.left, l++)
        const right = dfs(node.right, l++)
        if(Math.abs(right - left) > 1) answer = false
        return Math.max(right, left) + 1
    }
    dfs(root, 0)
    return answer
};