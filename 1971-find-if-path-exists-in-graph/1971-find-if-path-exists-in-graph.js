/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
 let visited = new Set();
  const graph = {}
  let answer = false
  
  for(const [from, to] of edges){
    if(graph[from]){
      graph[from].push(to)
    } else {
      graph[from] = [to]
    }
    if(graph[to]){
      graph[to].push(from)
    } else {
      graph[to] = [from]
    }
  }
  const bfs = () => {
    const queue = [source]
    
    while(queue.length){
      const node = queue.shift()
      if(node === destination) {
        answer = true
        return 
      }
      if(graph[node]){
        for(const nextNode of graph[node]){
           if(!visited.has(nextNode)) {
              visited.add(nextNode)  
               queue.push(nextNode) 
           }
        }
      }
    }
  }
  bfs()
  return answer
};


