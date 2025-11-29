// https://leetcode.com/problems/top-k-frequent-elements/submissions/1156682382/

// nums = [1,1,1,2,2,3], k=2.
// Output: [1,2]
// O(N + N) = O(N)

var topKFrequent = function (nums, k) {
  let hashMap = new Map();
  let arr = new Array(nums.length + 1).fill(0);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) {
      hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
    } else {
      hashMap.set(nums[i], 1);
    }
  }

  for (let [key, value] of hashMap) {
    let prev = arr[value] || [];
    prev.push(key);
    arr[value] = prev;
  }

  arr.reverse();

  for (let i = 0; i < arr.length; i++) {
    if (k < 1) break;
    if (arr[i]) {
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
        k--;
      }
    }
  }
  return result;
}

console.log(topKFrequent([1, 1, 1, 2, 3, 3, 3, 3, 4], 2))