/**
 * Two trees are said to be identical if they have exactly the same structure and the
 * same values at each corresponding node in the trees. In other words, if we perform an
 * in-order traversal of both trees and compare the values of the nodes visited in each tree,
 * then they should be exactly the same. The trees need to have the same number of nodes,
 * same value at the root, and the same structure for being identical.
 */

//r1 = root of tree 1, r2 = root of tree 2
function isIdentical(r1, r2) {
  // base case
  if (r1 == null && r2 == null) {
    return true;
  }

  if (r1 == null && r2 != null) {
    return false;
  }

  if (r1 != null && r2 == null) {
    return false;
  }

  const left = isIdentical(r1.left, r2.left);
  const right = isIdentical(r1.right, r2.right);

  const value = r1.data == r2.data;

  if (left && right && value) {
    return true;
  } else {
    return false;
  }
}
/**
 * The isIdentical function takes two Node pointers, r1 and r2, as input and returns a boolean
 * value indicating whether the two trees rooted at r1 and r2 are identical.
 * The implementation checks for the base case where both r1 and r2 are null.
 * If this is true, the function returns true since two null trees are considered identical.
 * If either r1 or r2 is null but the other is not, the function returns false since the trees
 * are not identical.
 * If neither r1 nor r2 is null, the function recursively calls itself to check the left and
 * right subtrees of both trees. The function also checks whether the values at the root nodes
 * of both trees are equal. If both the left and right subtrees are identical and the root node
 * values are equal, the function returns true. Otherwise, it returns false.
 */
function isIdenticalTree(root1, root2) {
  // Base case: if both roots are null, return true
  if (!root1 && !root2) {
    return true;
  }

  // If only one of the roots is null, return false
  if (!root1 || !root2) {
    return false;
  }

  // If the data at the roots is not equal, return false
  if (root1.data !== root2.data) {
    return false;
  }

  // Recursively check if the left and right subtrees are identical
  return (
    isIdenticalTree(root1.left, root2.left) &&
    isIdenticalTree(root1.right, root2.right)
  );
}
