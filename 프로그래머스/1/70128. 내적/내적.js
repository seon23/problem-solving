const solution = (a, b) => {
    return Array(a.length).fill().reduce((acc, _, idx) => acc + a[idx] * b[idx], 0);
}