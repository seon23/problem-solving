const solution = (hp) => Math.trunc(hp / 5) + Math.trunc((hp % 5) / 3) + (hp % 5 % 3);