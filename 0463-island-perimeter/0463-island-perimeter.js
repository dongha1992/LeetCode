/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
 let answer = 0;
  let cnt = 0;
  const n = grid.length
  const m = grid[0].length
  const ch = Array.from({length:n}, ()=>Array(m).fill(0))

  let dx = [-1, 0, 1, 0]
  let dy = [0, 1, 0, -1]
  
  const dfs = (x, y) => {
    grid[x][y] = 0;
    ch[x][y] = 1
    for(let k = 0; k < 4; k++){
      let nx = x+dx[k]
      let ny = y+dy[k]
  
      if(nx >= 0 && nx < n && ny >= 0 && ny < m){
        if(grid[nx][ny]===1) dfs(nx, ny)
        else if(grid[nx][ny]===0 && !ch[nx][ny]) {
          cnt++
        } 
      }
      if(nx < 0 || nx >= n || ny < 0 || ny >= m) cnt++
    }

  }
  
  for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
      if(grid[i][j] === 1){
        dfs(i, j)
      } 
    }
  }
  return cnt
};