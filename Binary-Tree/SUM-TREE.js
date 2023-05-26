/**
 * check sum tree or not
 *
 * for every node in the tree except leaf node, if sum of left-subtree and right-subtree is equal to node.
 *
 * condition:
 * 1. left part is sum-tree? if true
 * 2. right part is sum-tree? if true
 * 3. check node, is sum-tree? if true (root.data = sum[left] + sum[right])
 *
 * A sum tree is a binary tree in which each node is the sum of its left and right sub-tree nodes
 * (if they exist). In other words, for each node in the tree, the value at that node must be
 * equal to the sum of the values of its left and right child nodes.
 *
 * Alternatively, a binary tree is a sum tree if it is an empty tree or a single node tree,
 * or its value is equal to the sum of its left and right sub-trees and its left and right
 * sub-trees are also sum trees.
 */
function isSumTreeFast(root) {
  //base case (for empty tree)
  if (root === null) {
    return [true, 0];
  }

  //(for leaf nodes)
  if (root.left === null && root.right === null) {
    return [true, root.data];
  }

  const leftAns = isSumTreeFast(root.left);
  const rightAns = isSumTreeFast(root.right);

  const isLeftSumTree = leftAns[0];
  const isRightSumTree = rightAns[0];

  const leftSum = leftAns[1];
  const rightSum = rightAns[1];

  // root.data === leftSum + rightSum this would return either true or false, so condition would be either true or false
  const condn = root.data === leftSum + rightSum;

  let ans = [];

  if (isLeftSumTree && isRightSumTree && condn) {
    ans[0] = true;
    ans[1] = root.data + leftSum + rightSum;
  } else {
    ans[0] = false;
  }

  return ans;
}

function isSumTree(root) {
  return isSumTreeFast(root)[0];
}
