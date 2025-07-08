/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected[0].length;
    const visited = Array(n).fill(false)
    let answer = 0;
    
    for(let start = 0; start < n; start++) {
        if(!visited[start]) {
            dfs(start)
            answer++
        }
    }

    function dfs(start) {
        if(start === n) {
            return
        } else {
            for(let i = 0; i < n; i++) {
                if(isConnected[start][i] === 1 && !visited[i]) {
                    visited[i] = true
                    dfs(i)
                }
            }
        }
    }

    return answer
};