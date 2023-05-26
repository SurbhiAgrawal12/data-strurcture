/**
 * Diameter: longest path between any two nodes.
 * Number of nodes btwn logest path = Diameter.
 *
 * Approach:
 * 1. diameter of left sub tree
 * 2. diameter of right subtree
 * 3. combo of left and right (longest path between any two nodes ie left + right+current node)
 *
 * option1: diameter(root->left) ie diameter from left sub tree
 * option2: diameter(root-> right) ie diameter of right subtree
 * option3: height(root->left) + 1 + height(root->right)
 *
 * ans = max[option1, option2, option3]
 * But TC=O(n^2)
 *
 * To determine the diameter of a binary tree, we need to find the maximum distance between
 * any two leaf nodes in the tree. 
 * 
 * Here, height() function is used to calculate the height of a binary tree, 
 * and diameter() function recursively calculates the diameter of the tree by finding the maximum of the following:
    Diameter of left subtree
    Diameter of right subtree
    Length of the path passing through the root node
 */

// Definition for a binary tree node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate height of a binary tree
function height(root) {
  if (root === null) {
    return 0;
  } else {
    return 1 + Math.max(height(root.left), height(root.right));
  }
}

// Function to calculate diameter of a binary tree
function diameter(root) {
  if (root === null) {
    return 0;
  } else {
    // Get the height of left and right subtrees
    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    // Get the diameter of left and right subtrees recursively
    const leftDiameter = diameter(root.left);
    const rightDiameter = diameter(root.right);

    // Return the maximum of the following:
    // 1. Diameter of left subtree
    // 2. Diameter of right subtree
    // 3. Length of the path passing through root
    return Math.max(
      leftHeight + rightHeight,
      Math.max(leftDiameter, rightDiameter)
    );
  }
}

//instead of calculating height and diameter separately, will return height and diameter together in one traverse
//TC = O(n)
function diameterFast(root) {
  //base case
  if (!root) {
    //return diameter and height in this array first index is diameter and second index is height
    return [0, 0];
  }

  let left = diameterFast(root.left);
  let right = diameterFast(root.right);

  let op1 = left[0]; // left diameter
  let op2 = right[0]; // right diameter
  let op3 = left[1] + right[1] + 1;

  let ans = [];
  ans[0] = Math.max(op1, Math.max(op2, op3));
  ans[1] = Math.max(left[1], right[1]) + 1;

  return ans;
}

function diameter(root) {
  return diameterFast(root)[0];
}
