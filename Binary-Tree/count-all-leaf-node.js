/**
 * Algo: Traverse the whole tree and count the node whose left and right are not there.
 * we have 4 types of traversal, use any one of them.
 *
 * In this code, we define a Node class to represent a node in a binary tree. The countLeafNodes function recursively traverses the tree, counting the number of leaf nodes (i.e. nodes with no children). The base case is when we reach an empty tree or a leaf node, and we return 0 or 1 respectively. We then recursively call the function on the left and right subtrees and return their sum as the total number of leaf nodes in the tree.

In the example usage, we create a binary tree with 6 nodes and call the countLeafNodes function on its root node, which returns 3 as the number of leaf nodes.
 */

function inorder(root, count) {
  // base case
  if (root == null) {
    return;
  }

  inorder(root.left, count);

  // leaf node
  if (root.left == null && root.right == null) {
    count.count++;
  }

  inorder(root.right, count);
}

function noOfLeafNodes(root) {
  let count = { count: 0 };
  inorder(root, count);
  return count.count;
}

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
  let count = 0;
  console.log(noOfLeafNodes(root, count));
};

main();

/**Another approach
 * 
 * // Node class to define the structure of a tree node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Function to count the number of leaf nodes in a binary tree
function countLeafNodes(root) {
  if (!root) {
    return 0; // Base case: empty tree
  }

  if (!root.left && !root.right) {
    return 1; // Base case: leaf node
  }

  return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

console.log("Number of leaf nodes:", countLeafNodes(root)); // Output: 3

 */
