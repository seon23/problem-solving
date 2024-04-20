const solution = (decimal, acc = '') => {
    if (decimal < 3) return parseInt(acc + decimal, 3);    
    return solution(parseInt(decimal / 3), acc + (decimal % 3));
}