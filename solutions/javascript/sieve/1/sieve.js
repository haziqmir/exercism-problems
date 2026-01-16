export const primes = limit => {
  if (limit < 2) return [];
  
  const isPrime = new Array(limit + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  
  for (let i = 2; i * i <= limit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= limit; j += i) {
        isPrime[j] = false;
      }
    }
  }
  
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime[i]) primes.push(i);
  }
  
  return primes;
};