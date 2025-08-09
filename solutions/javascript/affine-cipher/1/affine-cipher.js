const mod = (n, m) => ((n % m) + m) % m;

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
}

const findMMI = (a, m) => {
  a = mod(a, m);
  for (let x = 1; x < m; x++) {
    if (mod (a * x, m) === 1) return x;
  }
  return null;
}

export const encode = (phrase, key) => {
  const m = 26;                     // number of letters in alphabet
  const a = mod(key.a, m), b = mod(key.b, m);
  if (gcd(key.a, m) !== 1) throw new Error('a and m must be coprime.');
  
  const str = phrase.toLowerCase();    // only lowercase
  let ret = "", written = 0;       // change by mod 5
  
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (/[^0-9a-z]/.test(ch)) continue;

    const chCode = ch.charCodeAt(0) - 97;
    let encrypted = ch;

    if (chCode >= 0 && chCode <= 25) {
      // change value
      encrypted = String.fromCharCode(97 + mod(a * chCode + b, m));
    }
    ret += encrypted;

    // add space every first characters
    written = (written + 1) % 5;
    if (written === 0) ret += ' ';
  }
  return ret.trim();
};

export const decode = (phrase, key) => {
  const m = 26;
  const a = mod(key.a, m), b = mod(key.b, m);
  if (gcd(key.a, m) !== 1) throw new Error('a and m must be coprime.');

  const mmi = findMMI(a, m);

  let ret = "";
  const str = phrase.replace(/[^0-9a-z]/g, '');
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const chCode = ch.charCodeAt(0) - 97;

    let decrypted = ch;

    if (chCode >= 0 && chCode <= 25) {
      decrypted = String.fromCharCode(97 + mod(mmi * (chCode - b), m));
    }
    ret += decrypted;
  }
  return ret;
};
