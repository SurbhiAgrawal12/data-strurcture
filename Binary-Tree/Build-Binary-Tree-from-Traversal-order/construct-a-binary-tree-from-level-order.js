/**
 * The first element of level order Array would be root element only
 * The next element would be left of root.
 * the next would be right of root
 * and the null element means no data
 */

class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

const buildTree = (levelOrderArray) => {
  if (levelOrderArray.length == 0) {
    return null;
  }

  //The first element of level order Array would be root element only
  let rootData = levelOrderArray[0];
  const root = new Node(rootData);
  let queue = [root];
  let indexOflevelOrderArray = 1;

  while (indexOflevelOrderArray < levelOrderArray.length) {
    //currentNode is pointing to root
    let currentNode = queue.shift();

    let leftValue = levelOrderArray[indexOflevelOrderArray++];

    if (leftValue !== null) {
      const leftChild = new Node(leftValue);
      currentNode.leftChild = leftChild;
      queue.push(leftChild);
    }

    const rightValue = levelOrderArray[indexOflevelOrderArray++];

    if (rightValue !== null) {
      const rightChild = new Node(rightValue);
      currentNode.rightChild = rightChild;
      queue.push(rightChild);
    }
  }
  return root;
};

let levelOrderArray = [1, 2, 3, null, 4, 5];
console.log("root :: ", JSON.stringify(buildTree(levelOrderArray)));
/**
 * The buildTree function takes an array levelOrder representing the level order traversal of a binary tree,
 * and returns the root node of the tree. If the array is empty, the function returns null.
 *
 * 1. The function starts by creating the root node with the first value in the levelOrder array.
 * 2. It also initializes a queue with the root node and a variable i to keep track of the current index
 *    in the levelOrder array.
 * 3. The function then enters a loop that runs until all the nodes have been processed.
 * 4. At each iteration, it dequeues a node from the queue, and adds its left and right child nodes
 *    (if they exist) to the queue and sets the corresponding child nodes of the current node.
 * 5. The loop runs until all the nodes in the levelOrder array have been processed,
 *    and returns the root node of the binary tree.
 *
 * Note that in the levelOrder array, a null value represents a missing node.
 * For example, the array [1, 2, 3, null, 4, 5] represents the binary tree:
 *   1
   /   \
  2     3
   \   / \
    4 5   null

 */
