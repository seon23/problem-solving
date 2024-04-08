const solution = (arr, divisor) => {
    const answer = arr.filter(a => a % divisor === 0);
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}