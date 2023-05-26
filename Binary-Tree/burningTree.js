/**
 * que: Given a binary tree and a node data called target.
 * Find the minimum time required to burn the complete binary tree if the target is set on fire.
 * It is known that in 1 second all nodes connected to a given node get burned. 
 * That is its left child, right child, and parent.

Note: The tree contains unique values.
Neighbouring node of target node means:
1. left node of target node
2. right node of target node
3. parent node of taarget node

so left and right we can access, cos node class me pointer mil jaega, 
but for parent, hume iska reference location store krana hoga, so hum ek map banaenge and us map me 
every node ka uske parent k sath mapping store kra lenge. isko hum level order traversal k through
achieve karenge.

step 3rd: for burning we need minimum time.
ab hum 2 data structure bnaenge map and queue, map me hum kaun2 se nodes visted hai wo aaenge.
and queue me target node first push karenge and then uske neighbouring nodes.
then we check a condition:
1. if there was any insertion in queue? if yes increment the time.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
//it create mapping
// and return target node
const createParentMapping = (root, target, NodeToParentMap) => {
  //level order traversal ki help se hum, node ka parent k sath mapping bnaenge
  const node = new Node(null);
  let queue = [];
  queue.push(root);
  //cos root doesn't have any parent
  NodeToParentMap.set(root, null);
  while (queue.length !== 0) {
    let frontNode = queue.shift();
    if (frontNode == target) {
      node = frontNode;
    }
    if (frontNode.left) {
      NodeToParentMap.set(frontNode.left, frontNode);
      queue.push(frontNode.left);
    }
    if (frontNode.right) {
      NodeToParentMap.set(frontNode.right, frontNode);
      queue.push(frontNode.right);
    }
  }
  return node;
};

//this function would burn tree
const burnTree = (targetNode, NodeToParentMap) => {
  const vistedNode = new Map();
  const queue = [];
  queue.push(root);
  vistedNode(root, true);

  let time = 0;

  while (queue.length !== 0) {
    let size = queue.length;
    let flag = 0;
    for (let i = 0; i < size; i++) {
      //process neighbouring node
      let nodeFront = queue.shift();
      if (nodeFront.left && !vistedNode.get(nodeFront.left)) {
        flag = 1;
        queue.push(nodeFront.left);
        vistedNode.set(nodeFront.left, true);
      }
      if (nodeFront.right) {
        flag = 1;
        queue.push(nodeFront.right);
        vistedNode.set(nodeFront.right, true);
      }
      if (
        (NodeToParentMap.get(nodeFront),
        !vistedNode.get(NodeToParentMap.get(nodeFront)))
      ) {
        flag = 1;
        queue.push(NodeToParentMap.get(nodeFront));
        vistedNode.set(NodeToParentMap.get(nodeFront), true);
      }
    }
    if (flag == 1) {
      time++;
    }
  }
  return time;
};

const minTime = () => {
  /**Algo:
   * 1. create parent mapping
   * 2. find target node
   * 3. burn the tree in min time.
   */

  const NodeToParentMap = new Map();

  let targetNode = createParentMapping(root, target, NodeToParentMap);
  let time = burnTree(targetNode, NodeToParentMap);

  return time;
};
