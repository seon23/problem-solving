const solution = (a, b) => {
    if (a === b) return a;
    return (a + b) * (Math.abs(a - b) + 1) / 2;
}