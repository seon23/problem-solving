const solution = (n) => {
  const pairs = { 1: n };
    
  for (let divisor = 2; divisor <= Math.sqrt(n); divisor += 1) {
    if (n % divisor === 0) pairs[n / divisor] = divisor;
  }

  return Math.sqrt(n) % 1 === 0
    ? Object.keys(pairs).length * 2 - 1
    : Object.keys(pairs).length * 2;
};