/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
 
var updateBoard = function(board, click) {
    const m = board.length;
    const n = board[0].length;
    const [clickR, clickC] = click;

    const dirs = [
        [-1, -1], [-1, 0], [-1, 1],
        [ 0, -1],          [ 0, 1],
        [ 1, -1], [ 1, 0], [ 1, 1],
    ];

    function isValid(x, y) {
        return x >= 0 && x < m && y >= 0 && y < n;
    }


    function dfs(x, y) {
        if (!isValid(x, y) || board[x][y] !== 'E') return;

        let mineCount = 0;
        for (let [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;
            if (isValid(nx, ny) && board[nx][ny] === 'M') {
                mineCount++;
            }
        }
        
         if (mineCount > 0) {
            board[x][y] = mineCount.toString();
            } else {
                board[x][y] = 'B';
                for (let [dx, dy] of dirs) {
                    dfs(x + dx, y + dy);
                }
        }
    }

    if (board[clickR][clickC] === 'M') {
        board[clickR][clickC] = 'X';
    } else {
        dfs(clickR, clickC);
    }

    return board;
};