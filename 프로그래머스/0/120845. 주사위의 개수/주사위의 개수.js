const solution = (box, n) => box.reduce((acc, curr) => acc * Math.floor(curr / n), 1);

