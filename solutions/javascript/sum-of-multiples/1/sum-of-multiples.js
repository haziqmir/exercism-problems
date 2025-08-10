export const sum = (items, level) => {
  if (items.length === 0 || level <= 0) return 0;
  const multiples = new Set();
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item === 0 || item >= level) continue;
    for (let n = item; n < level; n += item) {
      if (!multiples.has(n)) multiples.add(n);
    }
  }
  let ret = 0;
  for (const val of multiples) ret += val;
  return ret;
};