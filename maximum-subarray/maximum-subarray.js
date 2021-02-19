/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
       if(nums==null||nums.length<1){
            return 0;
        }
        let currMax=nums[0];
        let finalMax=nums[0];
        
        for(let i=1;i<nums.length;i++){
            currMax=Math.max(nums[i],currMax+nums[i]);
            finalMax=Math.max(finalMax,currMax);    
        }
        return finalMax;
    }
