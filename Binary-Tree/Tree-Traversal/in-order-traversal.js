/**
 * In order prints element in LNR order. ie left, node,right
 * 
 * This is a recursive implementation of the inorder traversal. 
 * The function takes the root of the binary tree as an argument.

    First, it checks if the root is null or not. 
    If the root is null, it simply returns from the function. Otherwise, 
    the function recursively traverses the left subtree, prints the value of the root node, 
    and then recursively traverses the right subtree. This process continues until all nodes 
    in the tree have been visited.
 */

const inorder = (root) => {
  //base case: if root = null, return
  if (!root) {
    return;
  }

  //first step: left me chale jao
  inorder(root.left);

  //recurssive call se wapas  aane k baad

  //second step: node ko print kar do
  console.log(root.data);

  //third step: right me call kar do
  inorder(root.right);
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
  inorder(root);
};

main();
