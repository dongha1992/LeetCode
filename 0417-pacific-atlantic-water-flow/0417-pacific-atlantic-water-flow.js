/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const m = heights.length;
    const n = heights[0].length;

    const pacific = Array.from({ length: m }, () => Array(n).fill(false));
    const atlantic = Array.from({ length: m }, () => Array(n).fill(false));

    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

    function dfs(x, y, visited, prev) {
        if (x < 0 || x >= m || y < 0 || y >= n) return;
        if (visited[x][y]) return;

        if(heights[x][y] < prev) return

        visited[x][y] = true;

        for (const [dx, dy] of dirs) {
            dfs(x + dx, y + dy, visited, heights[x][y]);
        }
    }

    for(let i = 0; i < m; i++) dfs(i, 0, pacific, heights[i][0]) // 왼쪽열

    for(let i = 0; i < n; i++) dfs(0, i, pacific, heights[0][i]) // 위쪽열

    for(let i = 0; i < m; i++) dfs(i, n-1, atlantic, heights[i][n-1]) // 오른쪽열
    
    for(let i = 0; i < n; i++) dfs(m-1, i, atlantic, heights[m-1][i]) // 아래행

    const result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }

    return result;
};