/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const graph = {};
    
    for([s, e] of edges) {
        if(!graph[s]) graph[s] = []
        graph[s].push(e)
        
        if(!graph[e]) graph[e] = []
        graph[e].push(s)
    }
    
    for(const node in graph){
        if(graph[node].length === edges.length) return node;
    }
    
    return 1
};