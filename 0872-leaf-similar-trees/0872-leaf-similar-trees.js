/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

var leafSimilar = function(root1, root2) {
    let answer = true
    
    const leafs1 = []
    dfs(root1, leafs1)
    
    const leafs2 = []
    dfs(root2, leafs2)
    
    if(leafs1.length !== leafs2.length) return false
    for(let i = 0; i < leafs1.length; i++){
        if(leafs1[i]!==leafs2[i]) {
            answer = false
            break;
        }
    }
    
    return answer
};

function dfs(root, leafs) {
      if(!root) return
      if(root.left === null && root.right === null){
          leafs.push(root.val)
      }
      dfs(root.left, leafs)
      dfs(root.right, leafs)
    }