export const convert = (numArr, from, to) => {
  if (from <= 1) throw new Error('Wrong input base');
  if (to <= 1) throw new Error('Wrong output base');
  if (!numArr || numArr.length === 0) throw new Error('Input has wrong format');
  if (numArr.length === 1 && numArr[0] === 0) return [0];
  if (numArr.join('').startsWith('0')) throw new Error('Input has wrong format');
  
  let allZeroes = true;
  const numArrLen = numArr.length;
  let baseTen = 0;
  
  for (let i = 0; i < numArrLen; i++) {
    const num = numArr[numArrLen - 1 - i];
    if (num !== 0) allZeroes = false;
    if (num >= from) throw new Error('Input has wrong format');
    if (num < 0) throw new Error('Input has wrong format');
    baseTen += num * Math.pow(from, i);
  }


  if (allZeroes === true) throw new Error('Input has wrong format');
  let start = baseTen;
  const retArr = [];
  
  while (start) {
    retArr.unshift(start % to);
    start = Math.floor(start / to);
  }
  return retArr;
};
