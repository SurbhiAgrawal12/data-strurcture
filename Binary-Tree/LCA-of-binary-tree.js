/**
 * Lowest Common Ancestor
 * Ancestor: above in heirarchy, like parent is also a ancestor(inshort purvaj)
 * so we have two nodes, hume dono nodes ka common ancestor chahiye jo lowest ho.
 * here lowest means jo phle aaya.
 *
 * Que: Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined
 * between two nodes p and q as the lowest node in T that has both p and q as descendants
 * (where we allow a node to be a descendant of itself).”
 *
 * TC = O(n) and SC = O(height)
 */

const lca = (root, n1, n2) => {
  //Base case
  if (!root) {
    return null;
  }
  if (root.data == n1 || root.data == n2) {
    return root;
  }
  let leftAns = lca(root.left, n1, n2);
  let rightAns = lca(root.right, n1, n2);

  if (!leftAns && !rightAns) {
    return root;
  } else if (!leftAns && rightAns) {
    return leftAns;
  } else if (leftAns && !rightAns) {
    return rightAns;
  } else {
    return null;
  }
};

// Driver code
class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);
root.left.left = new Node(1);

console.log(lca(root));
