/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    return nums.sort((a,b)=>{
        return (b+''+a)- (a+''+b)
    }).join('').replace(/^0*/,'') || 0
};
// var largestNumber = function(nums) {
//   return nums.sort(function(a, b) {
//         return (b + '' + a ) - (a + '' + b);
//     }).join('').replace(/^0*/,'') || '0';
// }