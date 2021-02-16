/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let start = 1;
    for (let i =0 ; i<nums.length-1; i++){
        if(nums[i] !== nums[i+1]){
            nums[start++] = nums[i+1]
        }
    }
    return start;
};
