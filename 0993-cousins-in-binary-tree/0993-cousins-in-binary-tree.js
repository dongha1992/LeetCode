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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const queue = [root];

    while (queue.length !== 0) {
        const queueLength = queue.length;
        let hasFoundX = false;
        let hasFoundY = false;

        for (let i = 0; i < queueLength; i++) {
            let node = queue.shift();

            if ((node.left?.val === x && node.right?.val === y) ||
                (node.right?.val === x && node.left?.val === y)) {
                return false;
            }

            if (node.val === x) hasFoundX = true;
            if (node.val === y) hasFoundY = true;
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (hasFoundX && hasFoundY) return true;
        if (hasFoundX || hasFoundY) return false;
    }
    
    return false;
};