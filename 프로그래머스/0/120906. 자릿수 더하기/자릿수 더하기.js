const solution = (n) => {
    const digitStrings = n.toString().split('');
    return digitStrings.reduce((sum, digitStr) => sum + Number(digitStr), 0);
}