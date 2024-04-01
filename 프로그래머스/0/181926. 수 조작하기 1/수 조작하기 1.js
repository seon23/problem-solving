const solution = (n, control) => {
    const pairs = { w: 1, s: -1, d: 10, a: -10 };
    let answer = n;
    
    for (let char of control) {
        answer += pairs[char];
    }
    
    return answer;
}

