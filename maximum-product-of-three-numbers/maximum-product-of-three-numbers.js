/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    var i = nums.length;
    nums.sort((a,b) => a-b);
    
    return Math.max(nums[0] * nums[1] * nums[i  - 1], nums[i - 1] * nums[i - 2] * nums[i - 3]);

};