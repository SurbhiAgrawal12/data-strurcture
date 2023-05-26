const readlineSync = require("readline-sync");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buildFromLevelOrder() {
  let queue = [];

  let data = readlineSync.questionInt("Enter data for root: ");
  const root = new Node(data);
  queue.push(root);

  while (queue.length !== 0) {
    let temp = queue.shift();

    let leftData = readlineSync.questionInt(
      "Enter left node for: " + temp.data + ": "
    );
    if (leftData !== -1) {
      temp.left = new Node(leftData);
      queue.push(temp.left);
    }

    let rightData = readlineSync.questionInt(
      "Enter right node for: " + temp.data + ": "
    );
    if (rightData !== -1) {
      temp.right = new Node(rightData);
      queue.push(temp.right);
    }
  }
  //temp is pointing it to root
  return root;
}

const root = buildFromLevelOrder();
console.log(JSON.stringify(root));
