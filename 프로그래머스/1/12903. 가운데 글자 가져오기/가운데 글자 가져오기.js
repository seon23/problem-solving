const solution = (s) => {
    const half = s.length / 2;
    return s.substr(Math.round(half) - 1, half % 1 === 0 ? 2 : 1);
}