function extractMatrixColumn(matrix, column) {
    //  First Solution
    return matrix.map(row => row[column])


    /* Second Solution    
    columnValues = []
    for (index in matrix){
        columnValues.push(matrix[index][column])
    }
    return columnValues 
    */


    /* Third Solution
    return matrix.reduce((newArr,currentArr)=>{
        newArr.push(currentArr[column])
        return newArr
    },[]) 
    */
}