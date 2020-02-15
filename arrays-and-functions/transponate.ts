function transponate (matrix: number[][]): number[][] {
    const newMatrix: number[][] = [];
    let interimArray: number[] = [];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix.length; j++){
            interimArray.push(matrix[j][i]);
        }
        newMatrix.push(interimArray)
        interimArray = []
    }
    
    return newMatrix
}