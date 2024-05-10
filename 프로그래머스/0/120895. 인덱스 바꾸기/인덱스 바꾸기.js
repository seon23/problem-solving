const solution = (my_string, num1, num2) => {
  let newString = '';

  for (const k in my_string) {
    if (k * 1 === num1) newString += my_string[num2];
    else if (k * 1 === num2) newString += my_string[num1];
    else newString += my_string[k];
  }

  return newString;
};
