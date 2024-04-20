const solution = (decimal, acc = '') => {
  if (decimal < 3) return (decimal + acc).split('').reduce((sum, curr, i) => sum + curr * (3 ** i), 0);

  return solution(parseInt(decimal / 3), (decimal % 3) + acc);
};
