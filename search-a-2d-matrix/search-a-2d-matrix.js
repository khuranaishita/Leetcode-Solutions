/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0) return 0;

    let colIndex = 0;
    let rowIndex = matrix.length - 1;
    while(rowIndex > 0 && target < matrix[rowIndex][colIndex]) {
        rowIndex --;
    }

    while(colIndex < matrix[0].length) {
        if (target === matrix[rowIndex][colIndex]) return true;
        if (target > matrix[rowIndex][colIndex]) {
            colIndex ++;
        } else if (rowIndex > 0){
            rowIndex --;
        } else {
            return false;
        }
    }

    return  false;
};