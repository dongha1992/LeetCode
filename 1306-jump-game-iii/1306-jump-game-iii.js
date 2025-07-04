/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const n = arr.length;
    let visited = Array.from({length:n}).fill(false)
    let answer = false
    function dfs(depth, currIdx) {
        const curr = arr[currIdx]
        
        if(curr === 0 ) {
            answer = true
        }

        if(!visited[currIdx]) {
            visited[currIdx] = true
            dfs(depth+1, currIdx + arr[currIdx])
            dfs(depth+1, currIdx - arr[currIdx])
            visited[currIdx] = false    
        }
    }

    dfs(0, start)
    return answer


};