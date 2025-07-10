/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
    const n = quiet.length;
    const graph = Array.from({ length: n }, () => []);

     for (const [a, b] of richer) {
        graph[b].push(a);
    }
    
    const answer = Array(n).fill(-1);

    const dfs = (person) => {
        if (answer[person] !== -1) return answer[person]; 
        answer[person] = person

        for(const candidate of graph[person]) {
            const quiter = dfs(candidate)
            if(quiet[quiter] < quiet[answer[person]]) {
                answer[person] = quiter;
            } 
        }

        return answer[person]
    }

    for(let i = 0; i < n; i++) {
        dfs(i)
    }

    return answer
    
};
