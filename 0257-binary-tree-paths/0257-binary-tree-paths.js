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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const answer = []
    
    const dfs = (root, path) => {
     if(!root) return  
     path = path ? `${path}->${root.val}` : `${root.val}`    
     if(root.left === null && root.right === null){ 
         answer.push(path)
     }  
     dfs(root.left, path)
     dfs(root.right, path)
    }
    
    dfs(root, "")
    return answer
};