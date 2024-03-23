const solution = array => {
    const sortedArr = [...array].sort((a, b) => a - b);
    const medianIdx = Math.floor(sortedArr.length / 2);
    return sortedArr[medianIdx];
}