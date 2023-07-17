function solve(commands) {
    let initialNum = 1;
    let result = [];

    for (const currentCommad of commands) {

        //currentCommad === 'add' ? result.push(initialNum) : result.pop();
        
        switch (currentCommad) {
            case 'add':
                result.push(initialNum);
                break;
            case 'remove':
                result.pop();
                break;

            default:
                break;
        }
        initialNum++;
    }
    if (result.length > 0) {
        console.log(result.join('\n'));
    } else{
        console.log('Empty');
    }
}


solve(['add',
    'add',
    'add',
    'add']
);

solve(['add',
    'add',
    'remove',
    'add',
    'add']
);

solve(['remove',
    'remove',
    'remove']
);
