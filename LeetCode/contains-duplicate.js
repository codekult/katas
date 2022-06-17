// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let result = false;
  let uniques = new Set();

  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];

    if (uniques.has(current)) {
      return true;
    } else {
      uniques.add(current);
    }
  }

  return result;
};
