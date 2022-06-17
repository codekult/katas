//https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const all = new Set(nums);

  for (let i = 0; i < nums.length + 1; i += 1) {
    if (!all.has(i)) {
      return i;
    }
  }
};
