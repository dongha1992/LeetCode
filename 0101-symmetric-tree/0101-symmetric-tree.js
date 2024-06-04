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
var isSymmetric = function(root) {
    const queue = [root, root]
    
     while(queue.length){
         const [l, r] = [queue.shift(), queue.shift()];
         if(!l && !r) continue;
         if((r&&!l) ||(!r&&l)) return false
         if(l.val !== r.val) return false
         queue.push(l.left, r.right, l.right, r.left)
      }

    return true
};