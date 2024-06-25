/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let resultStr = ''
    for(let i=0; i<strs[0].length; i++){
        if(isCommon(strs,i)){
            resultStr += (strs[0].charAt(i))
        }else{
            break;
        }
    }

    return resultStr
};

function isCommon(strs, i){
    for(let j=1; j<strs.length; j++){
        if(strs[0].charAt(i) != strs[j].charAt(i)){
            return false
        }
    }
    return true
}