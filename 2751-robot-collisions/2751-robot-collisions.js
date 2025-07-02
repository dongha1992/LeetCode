/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */

var survivedRobotsHealths = function(positions, healths, directions) {
     const n = positions.length

     const robots = Array(n).fill(0).map((_, i) => ({
        idx: i,
        pos: positions[i],
        health: healths[i],
        dir: directions[i],
    }));

    robots.sort((a, b) => a.pos - b.pos)
    const alive = new Array(n).fill(true);
    const idxToRobot = new Array(n);
    const stack = []

    for(const r of robots) idxToRobot[r.idx] = r

    for (let robot of robots) {
        if(robot.dir === 'R') {
            stack.push(robot)
        } else {
            while(stack.length) {
                const top = stack[stack.length - 1];

                if(!alive[top.idx]) {
                    stack.pop()
                    continue;
                }

                if(top.health > robot.health) {
                    top.health--;
                    alive[robot.idx] = false;
                    break;
                } else if(top.health < robot.health) {
                    robot.health--;
                    alive[top.idx] = false;
                    stack.pop(); 
                } else {
                    alive[top.idx] = false;
                    alive[robot.idx] = false;
                    stack.pop();
                    break;
                }
            }
        }
     }

    const answer = [];   
    for(let i = 0; i < n; i++) {
        if(alive[i]) {
            answer.push(idxToRobot[i].health)
        }
    }   
    return answer
};