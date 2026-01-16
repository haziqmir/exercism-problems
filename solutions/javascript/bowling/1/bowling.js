export class Bowling {
  constructor() {
    this.frames = Array.from({length: 10}, () => []);
    this.frame = 0;
  }

  roll(pins) {
    if (pins < 0)  throw new Error('Negative roll is invalid');
    if (pins > 10) throw new Error('Pin count exceeds pins on the lane');
    if (this.frame >= 10) throw new Error('Cannot roll after game is over');

    const f = this.frames[this.frame];

    if (this.frame < 9) {
      if (f.length === 1 && f[0] + pins > 10)
        throw new Error('Pin count exceeds pins on the lane');
      f.push(pins);
      if (f[0] === 10 || f.length === 2) this.frame++;
      return;
    }
    if (f.length === 0) {
      f.push(pins);
      return;
    }
    if (f.length === 1) {
      const first = f[0];
      if (first !== 10 && first + pins > 10)
        throw new Error('Pin count exceeds pins on the lane');
      f.push(pins);
      if (first + pins < 10) this.frame = 10;
      return;
    }
    if (f.length === 2) {
      const [first, second] = f;
      if (first === 10 && second !== 10 && second + pins > 10)
        throw new Error('Pin count exceeds pins on the lane');
      f.push(pins);
      this.frame = 10;
      return;
    }
    throw new Error('Cannot roll after game is over');
  }

  score() {
    if (this.frame < 10)
      throw new Error('Score cannot be taken until the end of the game');

    const rolls = this.frames.flat();

    let total = 0;
    let i = 0;

    for (let frame = 0; frame < 10; frame++) {
      const r1 = rolls[i];
      if (r1 === 10) {
        total += 10 + rolls[i+1] + rolls[i+2];
        i += 1;
      } else {
        const r2 = rolls[i + 1];
        if (r1 + r2 === 10) {
          total += 10 + rolls[i + 2];
        } else {
          total += r1 + r2;
        }
        i += 2;
      }
    }
    return total;
    // return rolls.reduce((a, e) => a + e, 0);
  }
}