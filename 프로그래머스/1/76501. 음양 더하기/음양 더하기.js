const solution = (absolutes, signs) => {
    return absolutes.reduce((acc, abs, idx) => acc + abs * Math.pow(-1, signs[idx] + 1), 0);
}