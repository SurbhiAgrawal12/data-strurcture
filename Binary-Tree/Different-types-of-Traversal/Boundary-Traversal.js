/**
 * Boundary Traversal of a binary tree is a traversal of the tree where we visit the boundary 
 * nodes of the binary tree in an anti-clockwise direction starting from the root. 
 * The boundary nodes of the binary tree include the root node, the left boundary nodes 
 * (except for the leaf node), the leaf nodes, and the right boundary nodes 
 * (except for the leaf node) in that order. 
 * 
 * The traversal can be divided into three parts:
    1. Traverse the left boundary nodes (except for the leaf node) from the root to the leftmost leaf node in a top-down manner.
    2. Traverse all the leaf nodes of the binary tree from left to right.
    3. Traverse the right boundary nodes (except for the leaf node) from the rightmost leaf node to the root in a bottom-up manner.

    Algo to print left part:
    1. first root ko print kra
    1. and if left exist kart hai to  left ki call mar dena. 
    2. else right ki call maar dena.
 */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function getLeftBoundary(root, ans) {
  //base case, in case of empty tree or leaf node return
  //if leaf node toh srf return karna hai, na store krna hai na hi print krna hai
  if (root === null || (root.left == null && root.right == null)) {
    return;
  }

  //first step:
  //Algo is first print karo and the left traverse karo. (hum print ki jgh store krte hai)
  // Add current node to the result array
  ans.push(root.val);

  // Traverse the left boundary
  if (root.left !== null) {
    getLeftBoundary(root.left, ans);
  } else if (root.right !== null) {
    getLeftBoundary(root.right, ans);
  }
}

function getRightBoundary(root, ans) {
  if (root === null || (root.left == null && root.right == null)) {
    return;
  }

  // Traverse the right boundary
  //right wala subtree hume reverse order me printt krna matlab bottom-up approach,
  //so hum phle root se right leaf node tak traverse karenge and then recurssive call se wapas aate tym print karenge
  if (root.right !== null) {
    getRightBoundary(root.right, ans);
  } else if (root.left !== null) {
    getRightBoundary(root.left, ans);
  }

  // Add current node to the result array
  ans.push(root.val);
}

function getLeaves(root, ans) {
  if (root === null) {
    return;
  }

  // Traverse the left subtree
  getLeaves(root.left, ans);

  // Add leaf nodes to the result array
  if (root.left === null && root.right === null) {
    ans.push(root.val);
  }

  // Traverse the right subtree
  getLeaves(root.right, ans);
}

var boundaryOfBinaryTree = function (root) {
  let ans = [];

  //step1:  Add root node to the result array
  ans.push(root.val);

  //step2: Traverse the left boundary
  getLeftBoundary(root.left, ans);

  //step3: Traverse the leaf nodes
  getLeaves(root, ans);
  //instead of root , try to dry run with left and right subtree
  //getLeaves(root.left, ans);
  //getLeaves(root.right, ans);

  //step4: Traverse the right boundary
  getRightBoundary(root.right, ans);

  return ans;
};
