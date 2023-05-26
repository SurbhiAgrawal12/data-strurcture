/**
 * Algo:
 * 1. create a function, which will traverse the tree from root to leaf.
 *
 * 1. Create a hashmap/treemap that stores the horizontal distance as the key and an array
 *    containing the node's value and its height as the value of the map.
 * 2. We'll perform the preorder traversal on the binary tree. (We need to traverse the parent
 *    node before traversing its left and right child nodes. This can be performed with preorder
 *    traversal).
 * 3. If we reach a node having the horizontal distance that already exists as key in the map
 *    and a height greater than that of the previous node, we need to update this key with the
 *    new node and its height.
 * 4. Else, we'll put a new key (horizontal distance) with the current node's value and its
 *    height.
 * 5. Eventually, we'll end up getting the bottom-most nodes of the binary tree.
 */

const bottomView = (root, row, coloumn, map) => {
  //Base case: tree is empty
  if (!root) {
    return;
  }

  //If any node for the current horizontal distance already exists, and
  if (map.get(coloumn)) {
    // the current node's height is greater than that of previous one
    if (map.get(coloumn)[1] < row) {
      //we'll update it with the current node's value and height
      map.set(coloumn, [root.data, row]);
    }
  } else {
    map.set(coloumn, [root.data, row]);
  }
  //Recursively call left child node
  bottomView(root.left, height + 1, hd - 1, map);

  //Recursively call right child node
  bottomView(root.right, height + 1, hd + 1, map);
};

const main = () => {
  // Creating the binary tree.
  const root = createNode(1);
  root.left = createNode(2);
  root.right = createNode(3);
  root.left.left = createNode(4);
  root.left.right = createNode(5);
  root.right.left = createNode(6);
  root.right.right = createNode(7);
  root.left.left.left = createNode(8);
  root.left.left.right = createNode(9);
  const map = new Map();
  bottomView(root, 0, 0, map);

  for (const [key, value] of map) {
    console.log(value[0] + " ");
  }
};
