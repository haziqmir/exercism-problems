export const score = (roll, category) => {
  const counts = new Array(6).fill(0);

  // keep track of how many counts of each roll
  for (let i = 0; i < roll.length; i++) {
    counts[roll[i]-1] += 1;
  }

  switch (category.toLowerCase()) {
    case 'yacht':
      for (let i = 0; i < counts.length; i++) {
        if (counts[i] === 5) return 50;
      }
      return 0;
    case 'full house':
      let pair = 0, triple = 0;
      for (let i = 0; i < counts.length; i++) {
        if (counts[i] === 2) pair = i + 1;
        if (counts[i] === 3) triple = i + 1;
      }
      return (triple && pair) ? triple * 3 + pair * 2 : 0;
    case 'four of a kind':
      let four = 0;
      for (let i = 0; i < counts.length; i++) {
        if (counts[i] >= 4) {
          four = i + 1;
          break;
        }
      }
      return four * 4;
    case 'little straight':
      for (let i = 0; i < 5; i++) {
        if (counts[i] !== 1) {
          return 0;
        }
      }
      return 30;
    case 'big straight':
      for (let i = 1; i < 6; i++) {
        if (counts[i] !== 1) {
          return 0;
        }
      }
      return 30;
    case 'ones':
      return counts[0] * 1;
    case 'twos':
      return counts[1] * 2;
    case 'threes':
      return counts[2] * 3;
    case 'fours':
      return counts[3] * 4;
    case 'fives':
      return counts[4] * 5;
    case 'sixes':
      return counts[5] * 6;
    case 'choice':
      return roll.reduce((a, e) => a + e, 0);
    default:
      return 0;
  }
};
