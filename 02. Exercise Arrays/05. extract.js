function solve(input) {
    let result = [];
    let currentBiggest = input[0];

    input.map(x => {
        if (x >=  currentBiggest) {
            result.push(x);
            currentBiggest = x;
        }
        })
    console.log(result.join('\n'));
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);

solve([1,
    2,
    3,
    4]
);

solve([20,
    3,
    2,
    15,
    6,
    1]
);