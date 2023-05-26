/**
 * Given the root of a binary tree, calculate the vertical order traversal of the binary tree.
 * For each node at position (row, col),
 * its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively.
 * The root of the tree is at (0, 0).
 *
 * The vertical order traversal of a binary tree is a list of top-to-bottom orderings
 * for each column index starting from the leftmost column and ending on the rightmost column.
 * There may be multiple nodes in the same row and same column.
 * In such a case, sort these nodes by their values.
 *
 * Return the vertical order traversal of the binary tree.
                                (0, 0)
                                /    \
                            (1, -1)   (1, 1)
                            /         /    \
                        (2, -2)  (2, 0) (2, 2)
Algo: 
1. In vertical order traversal of a binary tree, 
2. we maintain a map where each key represents a horizontal distance from the root 
3. and the corresponding value is a list of nodes at that horizontal distance. 

4. We can calculate the horizontal distance of each node by starting from the root 
with horizontal distance 0 and subtracting 1 from the horizontal distance when moving left 
and adding 1 when moving right.

5. So, to mention the (row, column) position of each node in vertical order traversal, 
6. we can add two properties to each node: "row" and "column". 
7. The "row" property represents the vertical position of the node, 
8. with the root at row 0 and increasing as we move down the tree. 
9. The "column" property represents the horizontal position of the node, 
10. with the root at column 0 and increasing as we move to the right

so in short agar hum horizontal distance ka level wise nodes k sath mapping kra de toh humara kaam ho jaega.
horizontal distance means column number
level means row
{
    -1 : []
     0: []
     1: []
}
 */

function verticalOrderTraversal(root) {
  let map = new Map();
  let queue = [{ node: root, row: 0, column: 0 }];

  if (root == null) {
    return [];
  }

  while (queue.length) {
    let { node, row, column } = queue.shift();

    if (node) {
      //agar map me column number exist nahi kar rha toh map ko set kr do
      if (!map.has(column)) {
        map.set(column, []);
      }
      map.get(column).push({ node: node, row: row, column: column });

      queue.push({ node: node.left, row: row + 1, column: column - 1 });
      queue.push({ node: node.right, row: row + 1, column: column + 1 });
    }
  }

  // sort the map keys to get nodes in left-to-right order
  let columns = [...map.keys()].sort((a, b) => a - b);

  let result = [];
  for (let col of columns) {
    let nodes = map.get(col);
    nodes.sort((a, b) => a.row - b.row); // sort nodes by row

    // add nodes to result, omitting the row and column properties
    result.push(...nodes.map((n) => n.node.data));
  }

  return result;
}

/**
 * let mp=new Map()
    mp.set("a",11);
    mp.set("b",2);
    mp.set("c",5);
    console.log(mp.keys()) => MapIterator {"a", "b", "c"}
    [...map.keys()] => ["a", "b", "c"]
    ... spread operator, spreads the elements of an array or object
    It can also be used to add elements to an array or object, like [...array1, newElement] 
    or {...object1, newKey: newValue}.
 */
/***************************************************************************/

function verticalOrderTraversal(root) {
  // Initialize an empty object to store nodes with their horizontal and vertical positions
  let nodes = {};

  // Initialize a queue to perform BFS on the binary tree and an empty array to store the traversal result
  let q = [];
  let ans = [];

  // If the root is null, return the empty array
  if (root == null) {
    return ans;
  }

  // Add the root to the queue with its horizontal and vertical positions as [0, 0]
  q.push([root, [0, 0]]);

  // Perform BFS on the binary tree
  while (q.length > 0) {
    // Dequeue the front node from the queue
    let temp = q.shift();
    let frontNode = temp[0];
    let hd = temp[1][0];
    let lvl = temp[1][1];

    // Store the node in the nodes object with its horizontal and vertical positions as the key
    if (!nodes.hasOwnProperty(hd)) {
      nodes[hd] = {};
    }
    if (!nodes[hd].hasOwnProperty(lvl)) {
      nodes[hd][lvl] = [];
    }
    nodes[hd][lvl].push(frontNode.data);

    // Enqueue the left and right child nodes with their updated horizontal and vertical positions
    if (frontNode.left) {
      q.push([frontNode.left, [hd - 1, lvl + 1]]);
    }
    if (frontNode.right) {
      q.push([frontNode.right, [hd + 1, lvl + 1]]);
    }
  }

  // Get the horizontal position keys from the nodes object and sort them in ascending order
  let hdKeys = Object.keys(nodes).sort((a, b) => a - b);

  // Loop through the horizontal position keys
  for (let i = 0; i < hdKeys.length; i++) {
    // Get the vertical position keys for the current horizontal position and sort them in ascending order
    let lvlKeys = Object.keys(nodes[hdKeys[i]]).sort((a, b) => a - b);
    // Loop through the vertical position keys for the current horizontal position
    for (let j = 0; j < lvlKeys.length; j++) {
      // Loop through the nodes for the current horizontal and vertical positions and add them to the traversal result
      for (let k = 0; k < nodes[hdKeys[i]][lvlKeys[j]].length; k++) {
        ans.push(nodes[hdKeys[i]][lvlKeys[j]][k]);
      }
    }
  }

  // Return the traversal result
  return ans;
}
