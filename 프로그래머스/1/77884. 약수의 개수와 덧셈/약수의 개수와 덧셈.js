const solution = (left, right) => {
    let answer = 0;
    for (let i = left; i <= right; i += 1) {
        answer += (Math.sqrt(i) % 1 === 0 ? -i : +i);
}
    return answer;
}