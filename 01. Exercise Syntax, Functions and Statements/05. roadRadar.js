function solve(input) {
    const speed = input[0];
    const area = input[1];
    let currentSpeed = 0;

    switch (area) {
        case 'motorway':
            currentSpeed = speed - 130;
            break;
        case 'interstate':
            currentSpeed = speed - 90;
            break;
        case 'city':
            currentSpeed = speed - 50;
            break;
        case 'residential':
            currentSpeed = speed - 20;
            break;

        default:
            break;
    }

    if (currentSpeed > 40) {
        console.log('reckless driving');
    } else if (currentSpeed > 20) {
        console.log('excessive speeding');
    } else if (currentSpeed > 0){
        console.log('speeding');
    }
}

solve([40, 'city']);
solve([21, 'residential']);
solve([120, 'interstate']);
solve([200, 'motorway']);