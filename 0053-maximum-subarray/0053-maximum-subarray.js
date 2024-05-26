/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0, maxSum = -Infinity

    for(let i=0; i<nums.length; i++){
        sum = Math.max(sum+nums[i], nums[i])
        maxSum = Math.max(maxSum, sum)
    }

    return maxSum
};