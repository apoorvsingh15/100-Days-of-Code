// https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashedMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hashedMap.has(target - nums[i])) return [hashedMap.get(target - nums[i]), i];
    else hashedMap.set(nums[i], i);
  }

}

console.log(twoSum([0, 6, 3, 5], 6))

// [1,2,3,4] = 6

// (1:0, 2:1, 3:2, 4:3)