/**
 * You are given a tree with n nodes numbered from 0 to n - 1 in the form of a parent array
 * parent where parent[i] is the parent of ith node. The root of the tree is node 0.
 * Find the kth ancestor of a given node.
 *
 * The kth ancestor of a tree node is the kth node in the path from that node to the root node.
 *
 * Implement the TreeAncestor class:
 * TreeAncestor(int n, int[] parent) Initializes the object with the number of nodes in the tree
 * and the parent array.
 * int getKthAncestor(int node, int k) return the kth ancestor of the given node node.
 * If there is no such ancestor, return -1.
 *
 * TC = O(n) and SC = O(height)
 */

const solve = (root, k, node) => {
  //base  case
  if (!root) {
    return null;
  }
  if (root.data == node) {
    return root;
  }

  let leftAns = solve(root.left, k, node);
  let rightAns = solve(root.right, k, node);
  if (leftAns != null && rightAns == null) {
    k--;
    if (k <= 0) {
      //k = INT_MAX karke humne ans ko lock kar diya, ie ab jitni bar bhi upper jaega yahi root hi pas  hoga
      k = INT_MAX;
      return root;
    }
    return leftAns;
  }
  if (leftAns == null && rightAns != null) {
    k--;
    if (k <= 0) {
      //k = INT_MAX karke humne ans ko lock kar diya, ie ab jitni bar bhi upper jaega yahi root hi pas  hoga
      k = INT_MAX;
      return root;
    }
    return rightAns;
  }
};

const getKthAncestor = (root, k, node) => {
  let ans = solve(root, k, node);
  if (ans == null || ans.data == node) {
    return -1;
  } else {
    return ans.data;
  }
};
