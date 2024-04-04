const solution = (absolutes, signs) => {
    return absolutes.reduce((acc, abs, idx) => acc + abs * (signs[idx] ? 1 : -1), 0);
}