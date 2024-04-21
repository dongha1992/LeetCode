/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const n = graph.length
  let ch = Array.from({length:n}, ()=>0)
  const answer=[]
  
  const dfs = (node, arr) => {
    if(node === n-1) {
      answer.push([...arr, node])
      return
    } else {
      for(let i = 0; i < graph[node].length; i++){
        const nextNode = graph[node][i]
        if(ch[nextNode] === 0){
          ch[nextNode] = 1
          dfs(nextNode, [...arr, node])
          ch[nextNode] = 0
        }
      }
    }
  }
  ch[0] = 1;
  dfs(0, [])
  return answer
};