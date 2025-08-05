const isNullish = v => v === null || v === undefined;

export const flatten = input => {
  // check if input is array

  const result = [];
  
  const walk = (value, out) => {
    if (Array.isArray(value)) {
      for (const item of value) walk(item, out);
    } else if (!isNullish(value)) {
      out.push(value);
    }
  }

  walk(input, result);
  return result;
};
