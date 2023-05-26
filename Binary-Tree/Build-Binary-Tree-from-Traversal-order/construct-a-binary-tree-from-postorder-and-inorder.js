/**
 * In post order, last node is always root node, cos order is (LRN)
 * Here making postEndIndex as a global variablle is working only, passing it as an argument gives incorrect ans
 *
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let postEndIndex = 7;
function buildTree(inorder, postOrder, inStartIndex, inEndIndex, map) {
  console.log("postEndIndex :: ", postEndIndex);
  if (inStartIndex > inEndIndex || postEndIndex < 0) {
    return null;
  }

  //root Element
  let rootValue = postOrder[postEndIndex];
  const root = new Node(rootValue);
  postEndIndex--;

  if (inStartIndex == inEndIndex) {
    return root;
  }

  // find position of this element in inorder
  let positionInInorder = map.get(rootValue);

  //In inorder array, after the root element we have right and then left element, cos order is LRN.. and we are traversing from the last  index

  root.right = buildTree(
    inorder,
    postOrder,
    positionInInorder + 1,
    inEndIndex,
    map
  );

  root.left = buildTree(
    inorder,
    postOrder,
    inStartIndex,
    positionInInorder - 1,
    map
  );

  console.log("root ::  ", root);
  return root;
}

function main() {
  let size = 8;
  let inorder = [4, 8, 2, 5, 1, 6, 3, 7];
  let postOrder = [8, 4, 5, 2, 6, 7, 3, 1];
  //let postEndIndex = size - 1;
  let inStartIndex = 0;
  let inEndIndex = inorder.length - 1;
  const map = new Map();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  console.log(
    JSON.stringify(buildTree(inorder, postOrder, inStartIndex, inEndIndex, map))
  );
}
main();
