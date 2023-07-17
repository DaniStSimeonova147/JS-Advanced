function solve(array) {
    const num = Number(array.pop());
    const rorations = num % array.length;

    for (let i = 0; i < rorations; i++) {
        let lastElemnt = array.pop();
        array.unshift(lastElemnt);
    }

    console.log(array.join(' '));
}

solve(['1',
    '2',
    '3',
    '4',
    '2']
);

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
);