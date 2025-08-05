export const find = (inArr, value) => {
  let low = 0, high = inArr.length;
  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (value === inArr[mid]) return mid;
    else if (value > inArr[mid]) low = mid + 1;
    else high = mid;
  }
  throw new Error('Value not in array');
};
