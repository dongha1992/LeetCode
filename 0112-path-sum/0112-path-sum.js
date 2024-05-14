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
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function (root, targetSum) {
    
  const recur = (node, currentSum, targetSum) => {
    if (!node) return false;
    currentSum += node.val;

    if (!node.left && !node.right) {
      return currentSum === targetSum;
    }

    return (
      recur(node.left, currentSum, targetSum) ||
      recur(node.right, currentSum, targetSum)
    );
  };

  return recur(root, 0, targetSum);
};