class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.leftChild === null) {
        node.leftChild = newNode;
      } else {
        this.insertNode(node.leftChild, newNode);
      }
    } else {
      if (node.rightChild === null) {
        node.rightChild = newNode;
      } else {
        this.insertNode(node.rightChild, newNode);
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      return false;
    } else if (node.value === value) {
      return true;
    } else if (value < node.value) {
      return this.searchNode(node.leftChild, value);
    } else {
      return this.searchNode(node.rightChild, value);
    }
  }
}

/**
 * The insertNode method inserts a new node into the binary tree starting from the given node.
 * If the value of the new node is less than the value of the current node, it is inserted in
 * the left subtree. Otherwise, it is inserted in the right subtree.
 * The method calls itself recursively until a leaf node is reached.
 *
 *
 * The searchNode method searches for a node with the given value starting from the given node.
 *  If the value of the current node is equal to the given value, the method returns true.
 * If the value of the current node is greater than the given value, the method calls itself
 * recursively with the left child node. If the value of the current node is less than the given
 * value, the method calls itself recursively with the right child node.
 * If the end of a subtree is reached without finding the node, the method returns false.
 */
