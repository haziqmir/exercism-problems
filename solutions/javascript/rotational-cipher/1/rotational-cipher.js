export const rotate = (str, rot) => {
  const shift = ((rot % 26) + 26) % 26;
  return str.replace(/[a-z]/gi, ch => {
    const code = ch.charCodeAt(0);
    const base = code <= 90 ? 65 : 97;
    return String.fromCharCode(((code - base + shift) % 26) + base);
  });
};
