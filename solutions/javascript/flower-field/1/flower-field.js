export const annotate = (input) => {
  if (input.length === 0) return [];
  if (input.length === 1 && input[0].length === 0) return [''];
  
  const annotation = input.map(row => row.split(''));
  const rows = annotation.length;
  const cols = annotation[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (annotation[r][c] === '*') continue; // * unchanged
      let sum = 0;
      
      // check all possible neighbours
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue; // same cell as itself
          
          const rowIdx = r + dr;
          const colIdx = c + dc;

          // out of bounds checks
          if (rowIdx < 0 || rowIdx >= rows) continue;
          if (colIdx < 0 || colIdx >= cols) continue;
          
          if (input[rowIdx][colIdx] === '*') sum++;
        }
      }
      annotation[r][c] = sum > 0 ? sum.toString() : ' ';
    }
  }
  return annotation.map(row => row.join(''));
};
