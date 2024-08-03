/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private int val;
    
    public TreeNode searchBST(TreeNode root, int val) {
        this.val = val;
        return this.dfs(root);
    }
    
    public TreeNode dfs(TreeNode node) {
        if (node == null) return null;
        
        if (node.val == this.val) return node;
        
        if (node.val < this.val) return this.dfs(node.right); 
        else return this.dfs(node.left);
    }
}