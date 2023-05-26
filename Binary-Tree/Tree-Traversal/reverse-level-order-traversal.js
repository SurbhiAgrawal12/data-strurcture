/**
 * This implementation uses two data structures:
 *  1. A queue to traverse the binary tree level by level,
 *  2. And a stack to store the nodes in reverse order.
 *
 * Algo:
 * 1. First, we check if the root is null or not.
 *    1.1. If it's null, we simply return from the function.
 *    1.2. Otherwise, we initialize a queue and a stack.
 *    1.3 We add the root node to the queue and start a loop that continues until the queue is empty.
 *    1.4 In each iteration of the loop,
 *            * we dequeue a node from the queue and push it onto the stack.
 *            * Then, if the node has a right child, we enqueue the right child,
 *            * and if it has a left child, we enqueue the left child.
 *            * This process continues until all nodes in the tree have been visited.
 *
 *    1.5 Once we've finished traversing the tree,
 *    1.6 we start another loop that pops nodes from the stack and prints their data.
 *    1.7 This loop continues until the stack is empty.
 *    1.8 This gives us the reverse level order traversal of the binary tree.
 *
 * You can call this function with the root of the binary tree to print its reverse level order traversal.
 */

const reverseLevelOrderTraversal = (root) => {
  if (!root) {
    return;
  }

  let q = [];
  q.push(root);
  q.push(null);
  let stack = [];

  while (q.length !== 0) {
    let node = q.shift();
    stack.push(node);

    if (!node) {
      if (q.length !== 0) {
        //queue still has some child nodes
        q.push(null);
      }
    } else {
      if (node.right) {
        q.push(node.right);
      }

      if (node.left) {
        q.push(node.left);
      }
    }
  }

  while (stack.length !== 0) {
    let node = stack.pop();
    if (!node) {
      process.stdout.write("\n");
    } else {
      process.stdout.write(node.data + " ");
    }
  }
};

const main = () => {
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
  reverseLevelOrderTraversal(root);
};

main();
