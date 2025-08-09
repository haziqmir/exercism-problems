const is_prime = n => {
  if (n <= 1) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

export const prime = n => {
  if (n === 0) throw new Error('there is no zeroth prime');
  let i = 2;
  while (n > 0) {
    if (is_prime(i)) n--;
    i++;
  }
  i -= 1;
  return i;
};
