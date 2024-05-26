/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let sSet = new Set()
    let left = 0
    let longestSubstring = 0

    for(let right=0; right<s.length; right++){
        while(sSet.has(s[right])){
            sSet.delete(s[left])
            left++
        }
        sSet.add(s[right])
        longestSubstring = Math.max(longestSubstring, right - left +1)
    }

    return longestSubstring
};