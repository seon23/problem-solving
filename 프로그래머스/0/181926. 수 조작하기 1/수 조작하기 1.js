const numbers = {
    w: 1,
    s: -1,
    d: 10,
    a: -10
};

const solution = (n, control) => {
    return [...control].reduce((acc, char) => acc + numbers[char], n);
}

