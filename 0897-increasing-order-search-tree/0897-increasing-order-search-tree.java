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
    Queue<Integer> nodes = new LinkedList<>();
    
    public TreeNode increasingBST(TreeNode root) {
        if(root == null) return root;
        recur(root);
        
        TreeNode answer = new TreeNode(0, null, null);
        TreeNode temp = answer;
        
        while(!nodes.isEmpty()) {
            temp.right = new TreeNode(nodes.poll(), null, null);
            temp = temp.right;
        }
        
        return answer.right;
    }
    
    public void recur(TreeNode root){
        if(root == null) return;        
        recur(root.left);
        nodes.add(root.val);
        recur(root.right);

    }
}