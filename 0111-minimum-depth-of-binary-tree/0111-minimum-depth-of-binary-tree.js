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
        if(!node) return 0
        if(!node.left && !node.right){
         min = Math.min(min, l)   
        }
        const left = dfs(node.left, l++)
        const right = dfs(node.right, l++)
        // return min
    }
    dfs(root, 1)
    return min
};

var minDepth = function(root) {
    if(!root) return 0;
    var result;
    function minHeight(root, depth){
        if(!root.left && !root.right){
            result = Math.min(result || depth, depth)
        }
        if(root.left) minHeight(root.left, depth + 1);
        if(root.right) minHeight(root.right, depth + 1);
    }
    minHeight(root, 1);
    return result;
};