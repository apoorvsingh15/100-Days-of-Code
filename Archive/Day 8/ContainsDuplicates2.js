// https://leetcode.com/problems/contains-duplicate-ii/

// [1, 2, 3, 4, 1], 5

// true

// [1,2,3,4,1], 1
// false

var containsNearbyDuplicate = function (nums, k) {
  let slidingWindow = new Map();
  let left = 0
  for (let i = 0; i < nums.length; i++) {
    if (i - left > k) {
      slidingWindow.delete(nums[left]);
      left++;
    }
    if (slidingWindow.has(nums[i])) return true;
    else slidingWindow.set(nums[i], 1)
  }
  return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 4, 1], 5));
console.log(containsNearbyDuplicate([1, 2, 3, 4, 1], 1));