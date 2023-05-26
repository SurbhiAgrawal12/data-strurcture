/**
 * This is a recursive implementation of the preorder traversal.
 * The function takes the root of the binary tree as an argument.
 *
 * First, it checks if the root is null or not.
 * If the root is null, it simply returns from the function.
 * Otherwise, the function prints the value of the root node,
 * then recursively traverses the left subtree,
 * and finally recursively traverses the right subtree.
 * This process continues until all nodes in the tree have been visited.
 *
 * You can call this function with the root of the binary tree to perform a preorder traversal of the tree.
 */

const preorder = (root) => {
  //base  case
  if (!root) {
    return;
  }
  //first step: print node
  console.log(root.data);
  //second step: left me jao
  preorder(root.left);
  //recurssive se aane k baad right me jao
  preorder(root.right);
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
  preorder(root);
};

main();
