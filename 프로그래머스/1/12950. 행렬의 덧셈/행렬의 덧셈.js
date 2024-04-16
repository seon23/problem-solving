const solution = (arr1, arr2) => {
    return arr1.reduce((acc, curr, i) => [...acc, curr.map((v, j) => v + arr2[i][j])], []);
}