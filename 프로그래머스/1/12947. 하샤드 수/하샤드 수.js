const solution = x => {
    const sum = [...`${x}`].reduce((acc, curr) => acc + curr * 1, 0);
    return x % sum === 0;
}