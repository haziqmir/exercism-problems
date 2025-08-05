const A = 'A'.charCodeAt(0);

export const rows = letter => {
  if (letter === 'A') return ['A'];
  const n = letter.charCodeAt(0) - A;

  const dim = n * 2 + 1;
  const result = new Array(dim);

  for (let i = 0; i <= n; ++i) {
    const pad = n - i;
    const inner = i === 0 ? '' : ' '.repeat(i*2-1);
    const ch = String.fromCharCode(A + i);
    result[i] = ' '.repeat(pad) + ch + inner + (i ? ch : '') + ' '.repeat(pad);

    for (let i = n + 1; i < dim; i++) {
      result[i] = result[dim - 1 - i];
    }
  }

  return result;
};
