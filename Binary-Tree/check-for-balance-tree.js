/**
 *        5
         / \
        3   8
       /   / \
      2   7   9
     /
    1

          5
         / \
        3   7
       /   / \
      2   6   8

balanced tree= |h_left - h_right| ≤ 1.

A balanced tree is a type of binary tree in which the heights of the two subtrees of any node 
differ by at most 1. In other words, for any node in a balanced binary tree, the heights of its 
left and right subtrees differ by at most 1.
 */

function isBalancedFast(root) {
  // base case
  if (root == null) {
    return [true, 0];
  }

  const left = isBalancedFast(root.left);
  const right = isBalancedFast(root.right);

  const leftAns = left[0];
  const rightAns = right[0];

  const diff = Math.abs(left[1] - right[1]) <= 1;

  const ans = [false, Math.max(left[1], right[1]) + 1];

  if (leftAns && rightAns && diff) {
    ans[0] = true;
  }

  return ans;
}

function isBalanced(root) {
  return isBalancedFast(root)[0];
}
