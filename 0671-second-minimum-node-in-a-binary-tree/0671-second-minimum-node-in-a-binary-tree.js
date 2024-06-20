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
    const min1 = root.val;
    let min2 = Infinity
    
    const dfs = (node) => {
        if(!node) return 
        if(node.val > min1 && node.val < min2){
            min2 = node.val
        }
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return min2 === Infinity ? -1 : min2;

};