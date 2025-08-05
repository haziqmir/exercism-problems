// only uppercase valid
const charToInt = char => char.charCodeAt(0) - 'A'.charCodeAt(0);
const intToChar = int => String.fromCharCode(int + 'A'.charCodeAt(0));

export const rows = letter => {
  if (letter === 'A') return ['A'];

  // targets and dimensions
  const goal = charToInt(letter) + 1;
  const dim = goal * 2 - 1;

  // empty array of dim*dim size
  const result = Array.from({length: dim}, () => new Array(dim).fill(' '));

  // start writing in the middle of each array
  let currentWritePos = Math.floor(dim/2);

  // loop over all the rows
  for (let i = 0; i < dim; i++) {
    // calculate which letter to write
    let letterIndex = i < goal ? i : dim - 1 - i;
    const currentLetter = intToChar(letterIndex);

    // write letter on the left...
    result[i][Math.abs(currentWritePos)] = currentLetter;
    // .. and the right
    result[i][dim - Math.abs(currentWritePos) - 1] = currentLetter;

    // decrement write pos, abs() takes care of the indices
    --currentWritePos;
  }

  // join each element of the array
  return result.map((e, i) => e.join(''));
};
