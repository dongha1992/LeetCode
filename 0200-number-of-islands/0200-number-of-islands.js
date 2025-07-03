/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const visited = Array.from({length:n}, () => Array(m).fill(false))
    const dirs = [
        [-1, 0], [0, 1], [1, 0], [0, -1]
    ]
    let answer = 0;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(!visited[i][j] && grid[i][j] === '1') {
                dfs(i, j)
                answer++
            }
        }
     }

     function dfs(x, y) {
        visited[x][y] = true
        for(let k = 0; k < dirs.length; k++){
            const [dx, dy] = dirs[k]
            const nx = x + dx;
            const ny = y + dy;

            if(!valid(nx, ny)) continue;
            if(visited[nx][ny]) continue;
            if(grid[nx][ny] === '0') continue;
            dfs(nx, ny)
        }
     }

     function valid(x, y) {
        return x >= 0 && x < n && y >= 0 && y < m 
     }

     return answer
};