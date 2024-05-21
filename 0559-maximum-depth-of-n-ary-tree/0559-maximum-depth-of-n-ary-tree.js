/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
   let answer = 0;
   const queue = [[root, 1]]

   while(queue.length){
    const [node, w] = queue.shift()
    if(answer < w){
        answer = w
    }
    if(!node) return 0
    if(node.children.length){
        for(let i = 0; i < node.children.length; i++){
            queue.push([node.children[i], w+1])
        }
     }
   }
    return answer
};