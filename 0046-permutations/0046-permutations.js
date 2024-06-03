/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans=[], curr=[]
    let s = new Set()

    findPermutations(nums, ans, curr, s)

    return ans
};

function findPermutations(nums, ans, curr, s){
    if(curr.length == nums.length){
        ans.push(curr.slice())
        return
    }

    let n= nums.length

    for(let i=0; i<n; i++){
        if(!s.has(i)){
            curr.push(nums[i])
            s.add(i)
            findPermutations(nums, ans, curr, s)
            curr.pop()
            s.delete(i)
        }
    }
}