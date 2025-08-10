const cycleLen = (rails) => 2 * (rails - 1);

export const encode = (inStr, rails) => {
  let pos = 0;
  let cycle = cycleLen(rails);
  const inStrLen = inStr.length;

  let out = '';

  for (let row = 0; row < rails; row++) {
    for (let i = row; i < inStrLen; i += cycle) {
      out += inStr[i];

      const j = i + cycle - 2 * row;
      if (row != 0 && row != rails - 1 && j < inStrLen) {
        out += inStr[j];
      }
    }
  }

  return out;
};

export const decode = (inStr, rails) => {
  let pos = 0;
  let cycle = cycleLen(rails);
  const inStrLen = inStr.length;

  const order = [];

  for (let row = 0; row < rails; row++) {
    for (let i = row; i < inStrLen; i += cycle) {
      order.push(i);

      const j = i + cycle - 2 * row;
      if (row != 0 && row != rails - 1 && j < inStrLen) {
        order.push(j);
      }
    }
  }
  const out = new Array(inStrLen);
  for (let k = 0; k < inStrLen; k++) {
    out[order[k]] = inStr[k];
  }

  return out.join('');
};
