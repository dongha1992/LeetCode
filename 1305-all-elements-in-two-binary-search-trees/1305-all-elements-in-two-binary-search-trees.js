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
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const arr = []
    
    const inorder = (root) => {
        if(!root) return
        inorder(root.left)
        arr.push(root.val)
        inorder(root.right)
    }
    inorder(root1)
    inorder(root2)
    return arr.sort((a,b)=>a-b)
};