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
 * @return {number[]}
 */
var findMode = function(root) {
    let pathMap = new Map()
    let answer = [];
    if(!root.val) return [0]
    
    const dfs = (node) => {
        if(!node) return []
        dfs(node.left)
        if(pathMap.has(node.val)) {
           pathMap.set(node.val, pathMap.get(node.val)+1)
        } else {
           pathMap.set(node.val, 1)
        }
        dfs(node.right)
    }
    
    dfs(root)
    
    let max = 0;
    pathMap =  [...pathMap.entries()].sort((a, b)=>b[1]-a[1])
    
    for(const p of pathMap){
    if(p[1] >= max){
      max = p[1];
      answer.push(p[0])
    }
    
  }
  return answer
};