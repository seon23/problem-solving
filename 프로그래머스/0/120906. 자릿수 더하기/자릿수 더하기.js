const solution = (n) => 
    n.toString()
        .split('')
        .reduce((acc, curr) => acc + Number(curr), 0);