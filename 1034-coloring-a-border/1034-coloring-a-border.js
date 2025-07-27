/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function(grid, row, col, color) {
    const m = grid.length
    const n = grid[0].length;
    const startColor = grid[row][col];
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

    const borders = [];
        function isBorder(i, j) {
            for (const [dx, dy] of dirs) {
            const x = i + dx, y = j + dy;
            if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] !== startColor) {
                return true;
            }
        }
            return false;
        }

    function dfs(i, j) {
        visited[i][j] = true;
        if (isBorder(i, j)) {
            borders.push([i, j]);
        }

        for (const [dx, dy] of dirs) {
            const x = i + dx, y = j + dy;
            if (
                x >= 0 && x < m && y >= 0 && y < n &&
                !visited[x][y] && grid[x][y] === startColor
            ) {
                dfs(x, y);
            }
        }
    }

    dfs(row, col);
     for (const [i, j] of borders) {
        grid[i][j] = color;
    }
    return grid
};