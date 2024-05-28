/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    let firstIndex = getFirstIndex(nums, target)
    let lastIndex = getLastIndex(nums, target)

    if(firstIndex>lastIndex){
        return [-1,-1]
    }
    console.log(firstIndex, lastIndex)
    return [firstIndex, lastIndex]
};

function getFirstIndex(nums, target){
    let left=0, right=nums.length-1

    while(left<=right){
        let mid= Math.floor((left+right)/2)

        if(nums[mid] == target){
            right = mid-1
        }else if(nums[mid]<target){
            left = mid +1
        }else{
            right = mid-1
        }
    }

    return left
}


function getLastIndex(nums, target){
    let left=0, right=nums.length-1

    while(left<=right){
        let mid = Math.floor((left+right)/2)

        if(nums[mid] == target){
            left = mid + 1
        }else if(nums[mid]<target){
            left = mid + 1
        }else{
            right = mid -1
        }
    }
    

    return right
}
