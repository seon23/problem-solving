const solution = (num, cnt = 0) => {
    if (cnt > 500) return -1;
    if (num === 1) return cnt;
    return (num % 2 === 0) ? solution(num / 2, cnt + 1) : solution(3 * num + 1, cnt + 1);
}