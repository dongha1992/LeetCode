/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let answer = 0;
  let cnt = 0;
  const n = grid.length
  const m = grid[0].length
  let dx = [-1, 0, 1, 0]
  let dy = [0, 1, 0, -1]
  
  const dfs = (x, y) => {
    grid[x][y] = 0;
    for(let k = 0; k < 4; k++){
      let nx = x+dx[k]
      let ny = y+dy[k]
      if(nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny]===1){
        cnt++
        dfs(nx, ny)
      }
    }
  }
  
  for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
      if(grid[i][j] === 1){
        dfs(i, j)
        cnt++
        if(cnt > answer){
          answer = cnt
        }
      } 
      cnt = 0;
    }
  }
  return answer
};