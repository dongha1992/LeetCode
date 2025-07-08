/**
 * @param {number[][]} isConnected
 * @return {number}
 */

 
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const parent = Array.from({ length: n }, (_, i) => i);


    function find(x) {
        if(x !== parent[x]) {
            parent[x] = find(parent[x])
        }
        return parent[x];
    }

    function union(x, y) {
        let rootX = find(x)
        let rootY = find(y)

        if(rootX !== rootY) {
            parent[rootX] = rootY;
        }
    }
    
     for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] === 1) {
                union(i, j);
            }
        }
    }

    const provinces = new Set();
    for (let i = 0; i < n; i++) {
        provinces.add(find(i));
    }

    return provinces.size;
};