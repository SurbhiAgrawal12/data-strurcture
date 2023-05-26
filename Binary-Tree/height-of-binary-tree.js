/**
 * height = longest path between root node and leaf node
 * Number of nodes between the longest path is height
 *
 * Approach:
 * 1. left subtree ki height nikal k dega recurssion(h1)
 * 2. right subtree ki height nikal k dega recurssion(h2)
 * 3. height = max(h1, h2) + 1
 */

/**
 *
 * The function recursively calculates the height of the left and right subtrees,
 * and returns the maximum height plus one for the current node.
 * The base case is when the current node is null, in which case the height is zero.
 */
function treeHeight(root) {
  if (root === null) {
    return 0;
  } else {
    let leftHeight = treeHeight(root.left);
    let rightHeight = treeHeight(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
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

  console.log(treeHeight(root));
};

main();
