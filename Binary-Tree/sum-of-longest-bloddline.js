/**
 * Sum of the Longest Bloodline of a Tree (Sum of nodes on the longest path from root to leaf node)
 *
 * Given a binary tree of size N. Your task is to complete the function sumOfLongRootToLeafPath(),
 * that find the sum of all nodes on the longest path from root to leaf node.
 * If two or more paths compete for the longest path, then the path having maximum sum of nodes is being considered.
TC = O(n) and SC = O(k)
*/

const sumOfLongRootToLeafPath = (root) => {
  let maxLength = 0;
  let maxSum = 0;

  const solve = (root, sum, length) => {
    //Base  case
    if (!root) {
      if (length > maxLength) {
        maxLength = length;
        maxSum = sum;
      } else if (length == maxLength) {
        maxSum = Math.max(maxSum, sum);
      }
      return;
    }

    sum = sum + root.value;
    solve(root.left, sum, length + 1);
    solve(root.right, sum, length + 1);
  };

  solve(root, 0, 0);
  return maxSum;
};

const sumLongestBloodline = (root) => {
  let maxSum = 0;

  const dfs = (node, depth) => {
    if (node === null) {
      return 0;
    }

    const leftSum = dfs(node.left, depth + 1);
    const rightSum = dfs(node.right, depth + 1);

    const currentSum = node.value + Math.max(leftSum, rightSum);
    maxSum = Math.max(maxSum, currentSum);

    return currentSum;
  };

  dfs(root, 0);

  return maxSum;
};

// Example usage:
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);

console.log(sumOfLongRootToLeafPath(root)); // Output: 10
