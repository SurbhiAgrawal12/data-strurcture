/**
 * POST order Traversal order is : LRN (Left->right->node)
 */

const postOrder = (root) => {
  //Base case()
  if (!root) {
    return;
  }

  //first step: left me jao
  postOrder(root.left);
  //left se aane k baad ie recurssive call se aane k baad right me jao
  postOrder(root.right);
  //right se aane k baad print karo
  console.log(root.data);
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
  postOrder(root);
};

main();
