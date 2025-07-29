/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    const TrieNode = () => {
        return { children: new Map(), isEnd: false }
    }

    const root = TrieNode();

    for(const path of folder) {
        const parts = path.split('/').slice(1);
        let node = root;

        for(const part of parts) {
            if(!node.children.has(part)) {
                node.children.set(part, TrieNode())
            }
            node = node.children.get(part)
        }
        node.isEnd = true;
    }

    const res = [];
    const dfs = (node, path) => {
        if (node.isEnd) {
            console.log(path)
            res.push('/' + path.join('/'));
            return
        }

        for(const [part, child] of node.children) {
            path.push(part)
            dfs(child, path)
            path.pop()
        }
    }

    dfs(root, [])
    return res
    
};