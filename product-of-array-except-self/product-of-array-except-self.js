/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if(nums==null||nums.length==0){
        return new int[0];
    }     
    let left= [nums.length]; 
    let right= [nums.length]; 
    let  result =[nums.length];
    left[0]=1;
    
    for(let i=1; i<nums.length; i++){
        left[i]=left[i-1]*nums[i-1];
    }
    
    right[nums.length-1]=1;
    for(let j=nums.length-2;j>=0;j--){
        right[j]=right[j+1]*nums[j+1];
    }    
    
    for(let i=0;i<nums.length;i++){
        result[i]=left[i]*right[i];
    }    
        
        return result;
    
    }
