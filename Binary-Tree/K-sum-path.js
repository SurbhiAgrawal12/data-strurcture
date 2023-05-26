/**
 * Given a binary tree and an integer K. Find the number of paths in the tree which have their
 * sum equal to K.
 * A path may start from any node and end at any node in the downward direction.
 * Expected Time Complexity: O(N)
Expected Auxiliary Space: O(Height of Tree)

Approach: 
1. hum tree ko traverse karenge inorder se.
2. hum har ek node pe, us node ka value array me store kra denge. (ie every node k pas  ek array storage hoga, jo root se yha tak ka path store kark rakhega)
3. simply left , right me traverse karenge, root jab null hai toh return kar denge.
4. jab recurssion se wapas aaenge toh har ek node k pas  apna array hai... node k path ko sum karenge check karenge given value. agar equal hua toh return kar denge.
*/

const solve = (root, k, count, path) => {
  if (!root) {
    return;
  }
  path.push(root.data);
  solve(root.left, k, count, path);
  solve(root.right, k, count, path);
  let size = path.length;
  let sum = 0;
  for (let i = size - 1; i >= 0; i--) {
    sum = sum + path[i];
    if (sum == k) {
      count++;
    }
  }
  path.pop();
};

const sum = (root, k) => {
  let path = [];
  let count = 0;
  let ans = solve(root, k, count, path);
  return ans;
};
