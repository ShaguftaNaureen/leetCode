/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    // let count = 0

    // for(let i=0; i<nums.length; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         if(i<j && ((nums[i] + nums[j] )< target)){
    //             count++
    //         }
    //     }
    // }

    // return count

    nums.sort((a,b)=> a - b)

    let left=0, right = nums.length-1, ans = 0

    while(left<right){
        if(nums[left]+ nums[right] < target){
            ans += right-left
            left+=1
        }else{
            right-=1
        }
    }

    return ans
};