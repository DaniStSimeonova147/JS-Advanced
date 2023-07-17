function solve(matrix) {
    let isMagic = true;
    let rowSum = 0;
    let currentRowSum = 0;
    let currentColSum = 0;
    let colSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            currentRowSum += matrix[i][j];
            currentColSum += matrix[j][i];
        }
        if (i !== 0 && rowSum !== currentRowSum && colSum !== currentColSum) {
            isMagic = false;
        } else{
            rowSum = currentRowSum;
            currentRowSum = 0;

            colSum = currentColSum;
            currentColSum = 0;
        }
    }
    console.log(isMagic);
}

solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );