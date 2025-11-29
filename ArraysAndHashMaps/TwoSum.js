/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashedMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hashedMap.has(target - nums[i])) {
      return [hashedMap.get(target - nums[i]), i];
    } else {
      hashedMap.set(nums[i], i);
    }
  }
};

// [2,7,11,15], target = 9
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
