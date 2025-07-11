/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const n = grid.length;
    const m = grid[0].length;

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== 1) return;
        grid[i][j] = -1; 
        dfs(i+1, j);
        dfs(i-1, j);
        dfs(i, j+1);
        dfs(i, j-1);
    }


    for(let i = 0; i < n; i++) {
        dfs(i, 0)
        dfs(i, m-1)
    }

    for(let j = 0; j < m; j++) {
        dfs(0, j)
        dfs(n-1, j)
    }

    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) count++;
        }
    }

    return count;
    

};