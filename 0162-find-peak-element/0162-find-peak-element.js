/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left =0, right = nums.length -1

    while(left <= right){
        let mid = Math.floor((left+right)/2)

        let lval = (mid==0) ? -Infinity : nums[mid-1]
        let rval = (mid==nums.length-1) ? -Infinity : nums[mid+1]

        if(nums[mid]>lval && nums[mid]>rval){
            return mid
        }else if(nums[mid]<lval){
            right = mid-1
        }else{
            left = mid+1
        }
    }
};