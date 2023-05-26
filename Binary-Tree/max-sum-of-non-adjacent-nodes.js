/**
 * que: Given a binary tree with a value associated with each node, we need to choose a subset 
 * of these nodes such that sum of chosen nodes is maximum under a constraint that no two chosen
 *node in subset should be directly connected that is, if we have taken a node in our sum then 
 we can’t take its any children or parents in consideration and vice versa.

 TC = O(n)
 SC = O(height)
 Algo: 
 1. create an array, 
 2. at index 0 , store max  sum including all nodes at current level
 3. at index 1 , store max  sum excluding the element at current level

 Approach:
 1. use inorder traversal, pura tree traverse kark leaf node pe jao, 
 2. when root is empty, max sum = 0 (both including and excluding)
 3. so, leaf node pe left k liye jaega wha se [0, 0]return hoga then right k liye jaega wha se [0, 0] return hoga
 4. so leaf node pe wapas aa jaega, ab hum ek bar leaf node ko include karenge and ek bar exclude karenge
 (ie recurssion se aane k baad hume process karna hai)
 Note: jab hum wapas root node pe pahunch jate hai toh either hum root ko include karte hai ya exclude karte hai.
 if hum root ko exclude karte hai, so left and right child k pas alrdy two two ans hai exclude wala include wala, so hum max le lenge and then left and right ko sum karlenge
 */
const solve = (root) => {
  if (!root) {
    return [0, 0];
  }
  let left = solve(root.left);
  let right = solve(root.right);

  let result = [];
  //max  sum including all nodes at current level
  /**left[0] and right[0] means sum of children of this node, we have exclude adjacent nodes */
  result[0] = root.data + left[1] + right[1];
  //exclude the element at current level
  result[1] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  return result;
};
const getmaxSumNode = (root) => {
  let ans = solve(root);
  return max(ans[0], ans[1]);
};
/*************************Another Approach using Map****************/

const maxSumNonAdjacentNodes = (root) => {
  const memo = new Map();

  const solve = (node) => {
    if (!node) {
      return 0;
    }

    if (memo.has(node)) {
      return memo.get(node);
    }

    let sumWithNode = node.data;
    if (node.left) {
      sumWithNode += solve(node.left.left) + solve(node.left.right);
    }
    if (node.right) {
      sumWithNode += solve(node.right.left) + solve(node.right.right);
    }

    const sumWithoutNode = solve(node.left) + solve(node.right);

    const maxSum = Math.max(sumWithNode, sumWithoutNode);
    memo.set(node, maxSum);

    return maxSum;
  };

  return solve(root);
};

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(maxSumNonAdjacentNodes(root)); // Output: 16
