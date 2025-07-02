/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const dir = {
      "U": [-1,0],
      "R":  [0,1],
       "D": [1,0],
      "L":  [0, -1]
    }
    let curr = [0,0]

    for(const move of moves) {
        const [x, y] = dir[move]
        curr[0] += x
        curr[1] += y
    }

    const answer = curr[0] === 0 && curr[1] === 0
    return answer
};