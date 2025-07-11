/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    const n = stones.length;
    const visited = Array(n).fill(false);

    const isConnected = (a, b) => {
        return stones[a][0] === stones[b][0] || stones[a][1] === stones[b][1];
    };

    let count = 0;

    function dfs(i) {
        visited[i] = true;
        for(let j = 0; j < n; j++) {
            if(!visited[j] && isConnected(i, j)) {
                dfs(j)
            }
        }
    }

    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            dfs(i)
            count++;
        }
    }

    return n - count   
}