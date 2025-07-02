/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const dp = Array.from({ length: n }, () => Array(m).fill(0));

    const dir = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ]

    let answer = 0

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
           answer = Math.max(dfs(i, j), answer)
        }
    }

    function dfs(x, y) {
        if (dp[x][y] !== 0) return dp[x][y];

        let max = 1

        for(let k = 0; k < dir.length; k++) {
            const [dx, dy] = dir[k]
            const nx = dx + x
            const ny = dy + y

            if(!valid(nx, ny)) continue;

            const next = matrix[nx][ny]
            const current = matrix[x][y]
            if(current < next) {
                max = Math.max(dfs(nx, ny) + 1, max) 
            }
        }
 
          dp[x][y] = max;
        return dp[x][y];
    }

    function valid(nx, ny) {
        return nx < n && nx >= 0 && ny < m && ny >= 0
    }

    return answer
};