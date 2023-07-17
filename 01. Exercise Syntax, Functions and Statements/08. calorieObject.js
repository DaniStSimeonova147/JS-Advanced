function solve(input){
    let output = {};
    for (let i = 0; i < input.length; i+=2) {
        let food = input[i];
        let calories = Number(input[i+1]);
        output[food] = calories;
    }
    console.log(output);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);