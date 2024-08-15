class Solution {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        Map<Integer, List<Integer>> graph = new HashMap();
        
        for(int[] e : edges) {
            int from = e[0];
            int to = e[1];
            
            graph.computeIfAbsent(from, k -> new ArrayList<>()).add(to);
            graph.computeIfAbsent(to, k -> new ArrayList<>()).add(from);
        }
        
        boolean[] visited = new boolean[n + 1];
        
        Queue<Integer> queue = new LinkedList<>();
        queue.add(source);
        
        visited[source] = true;
        
        while(!queue.isEmpty()) {
            int node = queue.poll();
            
            if(node == destination) return true;
            
            if(graph.containsKey(node)){
                for(int neighbor : graph.get(node)){
                    if(!visited[neighbor]){
                        visited[neighbor] = true;
                        queue.add(neighbor);               
                    }
                }
            }
        }
        
        return false;
    }
}