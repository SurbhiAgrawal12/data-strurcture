/**
 * Print Tree in level order
 * Note: In case of level order traversal always use Queue.
 */

//this function will only print the tree level wise

const levelOrderTraversal = (root) => {
  if (!root) {
    return;
  }
  let q = [];
  q.push(root);
  q.push(null);

  while (q.length !== 0) {
    let temp = q.shift();

    if (temp === null) {
      //purana level complete traverse ho chuka hai
      process.stdout.write("\n");
      if (q.length !== 0) {
        //queue still has some child ndoes
        q.push(null);
      }
    } else {
      process.stdout.write(temp.data + " ");
      if (temp.left) {
        q.push(temp.left);
      }

      if (temp.right) {
        q.push(temp.right);
      }
    }
  }
};

const main = () => {
  /**   this root is a object containing whole tree */
  const root = {
    data: 1,
    left: {
      data: 3,
      left: { data: 7, left: null, right: null },
      right: { data: 8, left: null, right: null },
    },
    right: {
      data: 5,
      left: { data: 9, left: null, right: null },
      right: { data: 10, left: null, right: null },
    },
  };

  levelOrderTraversal(root);

  /** Another way to invoke this function
   * const buildTree = require("./buildTree");
   * const root = buildTree();
   * console.log(JSON.stringify(root));
   * levelOrderTraversal(root);
   */
};
main();

/**
 * Yes, level order traversal of a binary tree can be implemented using the Breadth-First Search (BFS) algorithm. 
 * The BFS algorithm is a graph traversal algorithm that visits all the vertices (or nodes) of a
 * graph in breadth-first order, i.e., it visits all the vertices at a given depth (or level) 
 * before moving on to the vertices at the next depth.
 * 
 * In a binary tree, the level order traversal visits the nodes in breadth-first order, i.e., 
 * it visits all the nodes at a given level before moving on to the nodes at the next level. 
 * 
 * To perform level order traversal using BFS in a binary tree, 
 * 1. we can use a queue data structure to store the nodes at each level.
 * 2. We start by enqueueing the root node, 
 * 3. and then iterate over the queue until it is empty.
 * 4. At each iteration, we dequeue a node, 
 * 5. process it, and enqueue its left and right child nodes (if they exist). 
 * 
 * By processing the nodes in the order they were enqueued, we ensure that we visit all the
 * nodes at a given level before moving on to the nodes at the next level.

Therefore, we can say that level order traversal in a binary tree can be implemented using the BFS algorithm.

 */
