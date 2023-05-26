/**
 * Zigzag traversal of a binary tree refers to the traversal of the tree in a zigzag pattern,
 * where nodes at even levels are visited from left to right, and nodes at odd levels are
 * visited from right to left. In other words, we start from the root node and visit the
 * first level from left to right, the second level from right to left, and so on.
 *
 * Here is an example of a binary tree and its zigzag traversal:
 *      1
      /   \
     2     3
    / \   / \
   4   5 6   7
Zigzag traversal: 1 3 2 4 5 6 7
Zigzag traversal  also called as Spiral Traversal in Trees
TC = O(n), SC = O(n) cos we have made a queue
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function zigzagTraversal(root) {
  if (!root) {
    return [];
  }

  const queue = [root];
  const result = [];
  let leftToRight = true;

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      if (leftToRight) {
        currentLevel.push(currentNode.data);
      } else {
        //The unshift() method adds new elements to the beginning of an array.
        //if interviewer denied u too use unshift() method, use index
        //  let index = leftToRight ? i : size - i - 1;
        //  currentLevel[index] = currentNode.data;
        currentLevel.unshift(currentNode.data);
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    result.push(currentLevel);
    leftToRight = !leftToRight;
  }

  return result.flat();
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(zigzagTraversal(root)); // Output: [1, 3, 2, 4, 5, 6, 7]

/**
 * In the above code, we use a queue to traverse the binary tree level by level.
 * We start with the root node and traverse the levels alternately from left to right
 * and right to left. At each level, we store the nodes in an array,
 * reversing the order of nodes if we're traversing the level from right to left.
 * Finally, we return the flattened array of all nodes in ZigZag order.
 */

function zigZagTraversal(root) {
  let result = [];
  if (!root) return result;

  let q = [root];
  let leftToRight = true;

  while (q.length > 0) {
    let size = q.length;
    let ans = Array(size);

    // Level Process
    for (let i = 0; i < size; i++) {
      let frontNode = q.shift();

      // Normal insert or Reverse insert
      let index = leftToRight ? i : size - i - 1;
      ans[index] = frontNode.data;

      if (frontNode.left) q.push(frontNode.left);
      if (frontNode.right) q.push(frontNode.right);
    }

    // Direction change
    leftToRight = !leftToRight;

    for (let i of ans) {
      result.push(i);
    }
  }
  return result;
}
