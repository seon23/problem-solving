const solution = (num, cnt = 0) => {
    if (cnt > 500) return -1;
    if (num === 1) return cnt;
    
    return solution((num % 2 === 0 ? num / 2 : num * 3 + 1), cnt + 1);
}