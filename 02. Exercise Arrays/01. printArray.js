function solve(array) {
    //const delimiter = array[array.length -1];
    const delimiter = array.pop();
    let result = array.join(delimiter);
    console.log(result);
}

solve(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
);
solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']
);