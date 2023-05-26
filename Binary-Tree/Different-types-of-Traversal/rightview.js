/**
 * Recursive / DFS Approach
 * 1. Suppose I am in a given level, it appears that the algorithm should consider the right
 *    subtree with higher importance than the left one, since we have to print the rightmost
 *    node. This can be achieved by a right-oriented pre-order traversal, that is, current node,
 *    followed by right subtree, followed by the left subtree.
 * 2. In any given level, the algorithm must ONLY print the rightmost node,
 *    and if it has been printed, the algorithm must not print any other node (in that level).
 * 3. It can be achieved by using a variable which keeps track of the last level for which the
 *    rightmost node has been printed
 * 4. Now, if that variable's value is less than the value of the given level,
 *    it means that we are in a level whose rightmost node has not been printed.
 *    Therefore, we must print whatever node we first encounter/process in this level.
 * 5. Since our traversal is right oriented (see point 2), then we will always reach the
 *    rightmost node of a level before other nodes of that level.
 * 
 * The Recursive Algorithm
 * 1. Initialize two variables:
 *      a. curr_level: The current level of the tree we are currently present in during the 
 *         traversal
 *      b. last_printed_level: The last level for which the rightmost node has been printed/stored.
 * 2. Process the following sequentially in a recursive manner:
        a. Current node
        b. Right subtree
        c. Left subtree

    3. At the current node (if it is not null) check whether the current level > last printed level.
        a. If Yes: Print / store the current node and update the value of last_printed_level to 
            curr_level.
        b. If No: Continue

    4. Before calling the function recursively on the right and left subtree, increase the value of level by 1.
 */
const rightView = (root, last_printed_level, curr_level) => {
  // if root is null, there is nothing to do
  if (!root) {
    return;
  }

  if (last_printed_level < curr_level) {
    console.log(root.val);
    last_printed_level = curr_level;
  }

  rightView(root.right, last_printed_level, curr_level + 1);
  rightView(root.left, last_printed_level, curr_level + 1);

  return;
};
