/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const answer = []
    const recursion = (root) => {
        if(!root) return
        answer.push(root.val)      
        for(let i = 0; i < root.children.length; i++){
          recursion(root.children[i])
        }
    }
    recursion(root)
    return answer
};