// not needed for this
// const mod = (a, m) => (m + (a % m)) % m;

export const encode = phrase => {
  let outStr = '';
  let written = 0;
  const inStr = phrase.toLowerCase().replace(/[^0-9a-z]/g, '');
  for (let i = 0; i < inStr.length; i++) {
    const ch = inStr[i];
    const code = ch.charCodeAt(0) - 97;
    console.log(`${ch}, ${code}`);
    let out = ch;
    if (code >= 0 && code <= 25) {
      out = String.fromCharCode(97 + (25 - code));
    }
    outStr += out;
    // if (/[0-9]/.test(ch)) 
    // convert to int
    // convert back to char
    written = (written + 1) % 5;
    if (written % 5 === 0) outStr += ' ';
  }
  // check for written mod 5 inside loop
  return outStr.trim();
};

export const decode = phrase => {
  const inStr = phrase.replace(/[^0-9a-z]/g, '');
  let outStr = '';
  for (let i = 0; i < inStr.length; i++) {
    const ch = inStr[i];
    const code = ch.charCodeAt(0) - 97;
    console.log(`${ch}, ${code}`);
    let out = ch;
    if (code >= 0 && code <= 25) {
      out = String.fromCharCode(97 + (25 - code));
    }
    outStr += out;
  }
  return outStr;
};
