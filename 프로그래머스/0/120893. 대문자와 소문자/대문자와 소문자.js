const solution = (my_string) => {
  let newString = '';

  for (let char of my_string) {
      newString += (char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase());
  }
  return newString;
};