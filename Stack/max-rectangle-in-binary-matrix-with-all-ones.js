/**
 * Pseudo code:
 * 1. compute max  area for 1st row.
 * 2. for every remainig row
 *      2.1 upper wali row k elements ko add karo current wali row k elements me
 *      2.2 but make sure, what is ur base, base is current row element, if it is zero, sum would be zero.
 *      2.3 compute max  area
 *
 * TC = O(n*m), SC= O(n)
 */

const maxArea = (matrix, n, m) => {
  let area = largestRectangleArea(matrix[0], m);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      //row update karo by adding previous row's value
      if (matrix[i][j] != 0) {
        matrix[i][j] = matrix[i][j] + matrix[i - 1][j];
      } else {
        matrix[i][j] = 0;
      }
    }
    //entire row is updated now
    area = max(area, largestRectangleArea(matrix[i], m));
  }
  return area;
};
