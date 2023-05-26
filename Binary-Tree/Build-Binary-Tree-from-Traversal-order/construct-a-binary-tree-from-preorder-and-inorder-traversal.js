/**
 * que: Given two integer arrays preorder and inorder where preorder is the preorder traversal
 * of a binary tree and inorder is the inorder traversal of the same tree, construct and return
 * the binary tree.
 * 
 * Let us consider the below traversals:
        Inorder sequence: D B E A F C 
        Preorder sequence: A B D E C F

    In a Preorder sequence, the leftmost element is the root of the tree. 
    So we know ‘A’ is the root for given sequences. By searching ‘A’ in the Inorder sequence, 
    we can find out all elements on the left side of ‘A’ is in the left subtree and elements 
    on right in the right subtree. So we know the below structure now. 
                 A
               /   \
             /       \
           D B E     F C

    We recursively follow the above steps and get the following tree.

         A
       /   \
     /       \
    B         C
   / \        /
 /     \    /
D       E  F

Algorithm: buildTree() 
1. Pick an element from Preorder. 
2. Increment a Preorder Index Variable (preIndex in below code) to pick the next element in the next recursive call. 
3. Create a new tree node tNode with the data as the picked element. 
4. Find the picked element’s index in Inorder. Let the index be inIndex. 
5. Call buildTree for elements before inIndex and make the built tree as a left subtree of tNode. 
6. Call buildTree for elements after inIndex and make the built tree as a right subtree of tNode. 
7. return tNode.

TC = O(n^2), because we traverse the inOrder array again in each iteration for creating the root
node of a subtree, which takes O(n) time. For n nodes will take O(n2) to create the whole binary 
tree using the above algorithm.
SC = O(n),  as we are recursively building up the binary tree. 

Approach to a Time-efficient Solution: 
If we can find the indices in O(1) time, then we can surely improve the efficiency of the 
algorithm from O(n2) to O(n).

We see that arrays take O(n) time, and it is not working out here. If we think about 
precomputation and storing results in maps, it seems to be a good idea. So if we hash the 
indices using the element values, we can access them in O(1) time.

Hence, we must modify the findIndex function in the above-given algorithm and store the 
element’s indices in a map.
 */
class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}

const storeIndexOfInorderElementsInMap = (inOrder, size, mp) => {
  //store the indices of elements in the map
  for (let i = 0; i < size; ++i) {
    mp.set(inOrder[i], i);
  }
};

// function that finds the index of the given value in the inOrderTraversal
const findIndex = (map, val) => {
  return map.get(val); // return the index of the given data
};

// function to constructBinaryTree from inOrder and preOrder Traversals
const constructBinaryTreeUtil = () => {
  let preIndex = 0; // pre order traversal index to keep track of subtree root nodes

  const constructBinaryTree = (
    inOrder,
    preOrder,
    inOrderStart,
    inOrderEnd,
    size,
    mp
  ) => {
    // base case
    if (inOrderStart > inOrderEnd || preIndex >= size) {
      return null;
    }

    let rootElemetValue = preOrder[preIndex++];
    let root = new Node(rootElemetValue);

    let positionInInorderArray = findIndex(mp, rootElemetValue); // subtree root Index

    // construct left subtree
    root.left = constructBinaryTree(
      inOrder,
      preOrder,
      inOrderStart,
      positionInInorderArray - 1, //inorderEndIndex
      size,
      mp
    );

    // construct right subtree
    root.right = constructBinaryTree(
      inOrder,
      preOrder,
      positionInInorderArray + 1, //inorderStartIndex
      inOrderEnd,
      size,
      mp
    );

    // return the root of the subtree.
    return root;
  };
};

// function implementing the inOrderTraversal
const inOrderTraversal = (root) => {
  if (root == null) return; // return if there is node

  inOrderTraversal(root.left); // recursively go to left subtree
  console.log(root.data); // print the root Node of each subtree
  inOrderTraversal(root.right); // recursively go to right subtree
};

const main = () => {
  let size = 6; // size of the array (preOrder.length);
  let inOrder = [4, 2, 5, 1, 6, 3]; // inOrderTraversal sequence
  let preOrder = [1, 2, 4, 5, 3, 6]; // preOrderTraversal sequence
  let inOrderStart = 0;
  let inOrderEnd = size - 1;
  // map to store the indices of elements
  let mp = new Map();

  storeIndexOfInorderElementsInMap(inOrder, size, mp);

  //root Node of constructed binary tree
  let root = constructBinaryTree(
    inOrder,
    preOrder,
    inOrderStart,
    inOrderEnd,
    size,
    mp
  );

  console.log("root :: ", root);
  //check if the inOrderTraversal matches with the given traversal
  console.log("The inOrderTraversal of the binary tree is: ");
  inOrderTraversal(root);
};
main();
