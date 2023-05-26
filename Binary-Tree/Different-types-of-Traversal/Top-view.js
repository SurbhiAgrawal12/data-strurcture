/**
 * we need to put nodes of the same horizontal distance together.
 * We do a level order traversal so that the topmost node at a horizontal node is visited before
 * any other node of the same horizontal distance below it.
 * Hashing is used to check if a node at a given horizontal distance is seen or not.
 * 
 * Follow the below steps to solve the problem:

1. Create a function to print the top view of the binary tree
2. If the root is equal to the null value then return from the function (Base case)
3. Create a queue of type Node* and a map of type <int, int> and a variable hd to calculate the horizontal distance
4. Set hd of the root equal to zero and push it into the queue
5. Run a while loop till the queue is not empty
6. set hd equal to root->hd
7. Check if this hd already exists in the map, If not then set this node->val in map[hd]
8. If root->left exists then set its hd = root->hd – 1 and push it into the queue
9. If root->right exists then set its hd = root->hd + 1 and push it into the queue
10. Pop the front element of the queue and set its value in the root
11. Print the answer using the map

//Inshort
1. we are going to create a data structure Map 
2. Map will have keys as coloums of tree
3. and value of key would be an array, 
    3.1 where first index of array would be node.data
    3.2 and second index of an array would be row number

Algo: 
1. Will create a function, and using that function will push the node into the map along its 
   horizontal distance(coloumn) and level(row).
2. Now check if the map contains any value for the horizontal distance(coloumn) of the current node;
        2.1 if yes, compares both nodes and keeps the one with a lower level(row).
        2.2 or in case this is the first node corresponding to this horizontal distance(coloumn)
            it gets pushed into the map.
    Note: hum lower row(level) wala element push kar rahe, cos hume topmost row k elements chahiye hai.
3. We recursively call the Function for the left and right child of the current node with updated horizontal distance and level values.
4. Then we print the values stored in the map.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.hordist = 0;
    this.left = null;
    this.right = null;
  }
}

function createNode(data) {
  return new Node(data);
}

function completeTheMap(root, coloumn, row, map) {
  if (root == null) {
    return;
  }

  if (map.has(coloumn) === false) {
    map.set(coloumn, [root.data, row]);
  } else if (map.get(coloumn)[1] > row) {
    map.set(coloumn, [root.data, row]);
  }

  completeTheMap(root.left, coloumn - 1, row + 1, map);
  completeTheMap(root.right, coloumn + 1, row + 1, map);
}

function printTopView(root) {
  const mp = new Map();
  completeTheMap(root, 0, 0, mp);

  for (const [key, value] of mp) {
    console.log(value[0] + " ");
  }
}

// Driver function
function main() {
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

  // Function call
  printTopView(root);
}

main();

/**
 * The level-based approach
The above written approach is level-based approach, we also keep track of the level of the 
nodes along with their horizontal distance from the root. If we find a node with the same 
horizontal distance, then we check for its level. If the new node has a lower level, we replace it.

The avg time complexity of this approach is O(N*logN), and O(n^2) in the worst case, where n is the number of nodes in the binary tree 
    1. an insertion in a map takes O(logN) time, and we had N nodes to process.
    2. so the total time complexity of the function is the product of the time complexity 
    of the insertion operation and the number of nodes in the binary tree, which gives us
    O(nlogn) in the average case and O(n^2) in the worst case.

The space complexity of the printTopView function is O(n) as it uses a map data structure to 
store nodes and their level values, which can store up to n nodes in the worst case. 
Additionally, the function uses the call stack to maintain the recursive calls to itself, 
which can have a maximum depth of n in the worst case. So, the total space complexity of the 
function is O(n) in the worst case.
 */
