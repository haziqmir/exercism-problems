//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [],
    white: [whiteRow, whiteColumn] = [],
  } = {}) {
    if (blackRow < 0 || blackColumn < 0 ||
        whiteRow < 0 || whiteColumn < 0 ||
        blackRow > 7 || blackColumn > 7 ||
        whiteRow > 7 || whiteColumn > 7) {
      throw new Error("Queen must be placed on the board");
        }
    this.white = [whiteRow ?? 7, whiteColumn ?? 3];
    this.black = [blackRow ?? 0, blackColumn ?? 3];
    if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) {
      throw new Error("Queens cannot share the same space");
    }
  }

  toString() {
    const board = Array.from({length: 8}, () => new Array(8).fill('_'));
    board[this.white[0]][this.white[1]] = 'W';
    board[this.black[0]][this.black[1]] = 'B';
    return board.map(row => row.join(' ')).join('\n');
  }

  get canAttack() {
    if (this.white[0] === this.black[0] || this.white[1] === this.black[1]) return true;
    if (Math.abs(this.white[0] - this.black[0]) === Math.abs(this.white[1] - this.black[1])) return true;
    return false;
  }
}
