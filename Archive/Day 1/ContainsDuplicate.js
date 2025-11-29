
// N2 - Brute Force Method
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function (nums) {
//   // sort the array
//   if (nums.length > 1) {
//     const sorted = nums.sort((a, b) => a - b);

//     for (let i = 0; i < sorted.length; i++) {
//       if (sorted[i] === sorted[i + 1]) {
//         return true;
//       }
//
//     }
// return false
//   } else { return false };
// };

// Using HashMap - O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numbers = new Set(nums);
  const isEqual = numbers.size === nums.length;
  return !isEqual;
};





console.log(containsDuplicate([1, 2, 3, 4]));