export const parallelLetterFrequency = async (texts) => {
  const partials = await Promise.all(
    texts.map(async (t) => {
      const counts = {};
      for (const ch of t.toLowerCase()) {
        if (/\p{L}/u.test(ch)) {
          counts[ch] = (counts[ch] || 0) + 1;
        }
      }
      return counts;
    })
  );
  
  const total = {};
  for (const part of partials) {
    for (const [ch, n] of Object.entries(part)) {
      total[ch] = (total[ch] || 0) + n;
    }
  }
  return total;
};
