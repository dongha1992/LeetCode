/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    const visited = Array.from({length: numCourses}).fill(0)

    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
    }

    const checkCycle = (index) => {
        if(visited[index] === 1) return true
        if(visited[index] === 2) return false

        visited[index] = 1;
        for(const node of graph[index]) {
            if(checkCycle(node)) return true
        }
        visited[index] = 2;
        return false
    }

    for(let i = 0; i < numCourses; i++) {
        if(checkCycle(i)) return false
    }
    return true;
};

