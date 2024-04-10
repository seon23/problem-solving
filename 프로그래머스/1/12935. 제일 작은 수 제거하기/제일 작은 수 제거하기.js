const solution = (arr) => {
    if (arr.length === 1) return [-1];
    
    const min = arr.reduce((acc, curr) => acc < curr ? acc : curr);
    return arr.filter(v => v !== min);
}