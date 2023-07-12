function solve(number) {
    const myNumbers = number.toString();
    let trueOrFalse = true;
    let sum = Number(myNumbers[0]);

    for (let i = 1; i < myNumbers.length; i++) {
        if (myNumbers[i] != myNumbers[i-1]) {
           trueOrFalse = false;
        }
        sum += Number(myNumbers[i]);
    }
    console.log(trueOrFalse);
    console.log(sum);
}

solve(2222222);
solve(1234);