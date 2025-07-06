/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const n = board.length;
    const m = board[0].length;
    const visited = Array.from({length:n}, () => Array(m).fill(false))
    const dirs = [
        [-1, 0], [0, 1], [1, 0], [0, -1]
    ]
    let answer = false

    const startWord = word[0]

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(!visited[i][j] && board[i][j] === startWord) {
                dfs(i, j, 0)
            }
        }
     }

     function dfs(x, y, index) {
        if(index === word.length) {
            answer = true;
            return
        }
        if(!valid(x, y)) return
        if(word[index] !== board[x][y]) return
        if(visited[x][y]) return;

        visited[x][y] = true

        for(let k = 0; k < dirs.length; k++) {
            const [dx, dy] = dirs[k]
            const nx = x + dx;
            const ny = y + dy;

            dfs(nx, ny, index+1)

        }
        visited[x][y] = false
     }

     function valid(x, y) {
        return x >= 0 && x < n && y >= 0 && y < m 
     }

     return answer
};