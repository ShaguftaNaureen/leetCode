/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for(let row in image){
        image[row] = image[row].reverse()
        image[row] = image[row].map(item => 1-item)
    }

    return image;
};