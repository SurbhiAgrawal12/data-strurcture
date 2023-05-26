let maxLevel = -1;

const leftView = (root, currentLevel) => {
  //Base case, if tree is empty
  if (!root) {
    return;
  }
  // If the current level is greater than maxLevel so far.
  if (currentLevel > maxLevel) {
    // Print value of the node->
    console.log(root.data);
    maxLevel = currentLevel;
  }
  // Call for the left subtree and increasing the level by 1.
  leftView(root.left, currentLevel + 1);
  // Call for the right subtree and increasing the level by 1.
  leftView(root.right, currentLevel + 1);
};
