function solve(firstNumber, secondNumber) {
    const smallerNumber = Math.min(firstNumber, secondNumber);
    //let smallerNumber = 1;
    let gcdNumber = 1;

    // if (firstNumber < secondNumber) {
    //     smallerNumber = firstNumber;
    // } else {
    //     smallerNumber = secondNumber;
    // }

    for (let i = 1; i <= smallerNumber; i++) {
        if (firstNumber % i == 0 && secondNumber % i == 0) {
            gcdNumber = i;
        }
    }

    console.log(gcdNumber);
}

solve(15, 5);
solve(2156, 458);