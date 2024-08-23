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
    private int distance;
    
    public int countPairs(TreeNode root, int distance) {
        Map<TreeNode, List<TreeNode>> graph = new HashMap();
        Set<TreeNode> leaves = new HashSet();
        this.distance = distance;
        
        // 각 노드 간 거리를 계산하기 위해 주어진 root를 통해 graph를 양방향 인접리스트로 구성한다
        getGraph(root, null, graph, leaves);
        
        int pairs = 0;
        for(TreeNode leaf : leaves){
            pairs += bfs(leaf, graph, leaves);
        }
        
        return pairs / 2;
    }
    
    public void getGraph(TreeNode node, TreeNode parent, Map<TreeNode, List<TreeNode>> graph, Set<TreeNode> leaves){
        if(node == null) return;
        
        // left, righ 둘 다 말단 노드인 경우는 leaves에 추가
        if(node.left == null && node.right == null){
            leaves.add(node);
        }
        
        // 부모 노드가 있는 경우 양방향으로 그래프 추가
        if(parent != null){
            graph.computeIfAbsent(parent, k -> new ArrayList<>()).add(node);
            graph.computeIfAbsent(node, k -> new ArrayList<>()).add(parent);
        }
        
        // 왼쪽, 오른쪽 트리 탐색하기 위해서 재귀 탐색
        getGraph(node.left, node, graph, leaves);
        getGraph(node.right, node, graph, leaves);   
    }
    
    public int bfs(TreeNode leaf, Map<TreeNode, List<TreeNode>> graph, Set<TreeNode> leaves){
        // queue에는 {node, dist} 로 저장
        Queue<Pair> queue = new LinkedList<>();
        Set<TreeNode> visited = new HashSet();
        
        queue.add(new Pair(leaf, 0));
        visited.add(leaf);
        
        int cnt = 0;
        
        while(!queue.isEmpty()){
            Pair pair = queue.poll();
            TreeNode node = pair.node;
            int dist = pair.dist;
            
            // 두 말단 노드의 거리가 distance 이상이면 탐색 안 함
            if(dist > distance) continue;
            
            if(dist > 0 && leaves.contains(node)){
                // distance 범위 내 말단노드를 찾으면 cnt++;
                cnt++;
            }
            
            for(TreeNode nextNode : graph.getOrDefault(node, Collections.emptyList())){
                if(!visited.contains(nextNode)){
                    visited.add(nextNode);
                    queue.add(new Pair(nextNode, dist + 1));
                }
            }
        }
       return cnt;
    }
    class Pair {
    TreeNode node;
    int dist;
    
    public Pair(TreeNode node, int dist){
        this.node = node;
        this.dist = dist;
    }
}
}
