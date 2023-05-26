/**
 * Tree is a non linear data structure
 * A node can be connected with  multiple nodes
 * Binary Tree wo hota hai jisme ek node k <= 2 childs ho sakte hai.
 * Node wo hoti hai jisme data store hota hai.
 * jha se hamara tree start hota hai use hum root node bolte hai
 * siblings jiske parent same hote hai
 * ancestor
 * Descendent
 * parent
 * children
 * leaf: who has no child
 *
 * 1. level order  traversal
 * 2. reverse level order traversal
 * 3. inorder traversal (LNR)
 * 4. preorder traversal(NLR)
 * 5. post order traversal(LRN)
 * 6. build from level order
 * 7. build from inorder/preorder
 * 8. build from inorder/postorder
 *
 * Note: level order hum queue k through karte hai
 * and traversal hum recurssion k through karte hai
 */

const readline = require("readline-sync");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buildTree() {
  console.log("Enter the data: ");
  const data = parseInt(readline.prompt());

  if (data === -1) {
    return null;
  }

  const root = new Node(data);

  console.log(`Enter data for inserting in left of ${data}:`);
  root.left = buildTree();

  console.log(`Enter data for inserting in right of ${data}:`);
  root.right = buildTree();

  return root;
}

// Example usage
const root = buildTree();
console.log(root);
module.exports = buildTree;
