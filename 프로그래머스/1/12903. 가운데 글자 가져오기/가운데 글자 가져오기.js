const solution = (s) => {
    const half = s.length / 2;
    return half % 1 === 0 ? s.substring(half - 1, half + 1) : s[parseInt(half)];
}