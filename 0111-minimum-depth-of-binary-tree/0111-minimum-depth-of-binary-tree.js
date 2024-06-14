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
var minDepth = function(root) {
    let min = Infinity
    const dfs = (node, l) => {
        if(!node) {
            min = 0
            return
        }
        if(!node.left && !node.right){
          min = Math.min(min, l)   
        }
         if(node.left) dfs(node.left, l+1)
         if(node.right) dfs(node.right, l+1)
    }
    dfs(root, 1)
    return min
};

