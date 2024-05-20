/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let path = []
    const dfs = (root) => {
        if(!root){
           return null
         } else {
          if(root.children){
              for(let i = 0; i < root.children.length; i++){
                  dfs(root.children[i])
                  path.push(root.children[i].val)
              }
          }
        } 
    }
    
    dfs(root)
    root?.val >= 0 && path.push(root.val)
    return path
};