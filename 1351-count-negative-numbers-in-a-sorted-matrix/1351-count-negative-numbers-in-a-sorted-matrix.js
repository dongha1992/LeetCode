/**
 * @param {number[][]} grid
 * @return {number}
 */

var countNegatives = function (grid) {
  let answer = 0;
  for (let i = 0; i < grid.length; i++) {
    answer += binarySearch(grid[i]);
  }
  return answer;
};

function binarySearch(arr) {
  let left = 0;
  let right = arr.length - 1;
  let result = 0
  
  if(arr[0] < 0) return arr.length
  if(arr[arr.length-1] >= 0) return 0
    
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < 0) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return arr.length - result
}
