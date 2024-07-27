import java.util.ArrayList;
import java.util.List;

class Solution {
    public int findCenter(int[][] edges) {
        int n = edges.length + 1;
        List<Integer>[] graph = new ArrayList[n+1];
        
        for(int i = 1; i <= n; i++){
            graph[i]  = new ArrayList<>();
        }
        
        for(int[] edge: edges){
            int s = edge[0];
            int e = edge[1];
            graph[s].add(e);
            graph[e].add(s);
        }
        
        for(int i = 1; i <= n; i++) {
            if(graph[i].size() == edges.length) return i;
        }
        
        return -1;
    }
}