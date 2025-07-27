/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(n, paths) {
     const graph = Array.from({ length: n }, () => []);

     for(const [from ,to] of paths) {
        graph[from-1].push(to-1)
        graph[to-1].push(from-1)
     }

     const res = Array(n).fill(0)

     for (let i = 0; i < n; i++) {
        const used = new Set()
        
        for(const next of graph[i]) {
            if(res[next] !== 0) {
                used.add(res[next])
            }
        }

        for(let j = 1; j <= 4; j++) {
            if(!used.has(j)) {
                res[i] = j
                break;
            }
        }
    }

    return res 
}