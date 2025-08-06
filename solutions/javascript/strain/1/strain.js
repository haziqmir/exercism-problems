export const keep = (inArr, fn) => {
  if (!inArr) return [];
  const out = [];
  for (let i = 0; i < inArr.length; i++) {
    if (fn(inArr[i])) out.push(inArr[i]);
  }
  return out;
};

export const discard = (inArr, fn) => {
  if (!inArr) return [];
  const out = [];
  for (let i = 0; i < inArr.length; i++) {
    if (!fn(inArr[i])) out.push(inArr[i]);
  }
  return out;
};
