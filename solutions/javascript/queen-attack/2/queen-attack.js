export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [],
    white: [whiteRow, whiteColumn] = [],
  } = {}) {
    // any invalid row or col
    if (blackRow < 0 || blackColumn < 0 ||
        whiteRow < 0 || whiteColumn < 0 ||
        blackRow > 7 || blackColumn > 7 ||
        whiteRow > 7 || whiteColumn > 7) {
      throw new Error("Queen must be placed on the board");
        }

    // position on provided values or defaults
    this.white = [whiteRow ?? 7, whiteColumn ?? 3];
    this.black = [blackRow ?? 0, blackColumn ?? 3];

    // cannot have same position
    if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) {
      throw new Error("Queens cannot share the same space");
    }
  }

  toString() {
    // create array of _s
    const board = Array.from({length: 8}, () => new Array(8).fill('_'));
    // mark black and white queens
    board[this.white[0]][this.white[1]] = 'W';
    board[this.black[0]][this.black[1]] = 'B';
    // join and return
    return board.map(row => row.join(' ')).join('\n');
  }

  get canAttack() {
    // same row or col
    if (this.white[0] === this.black[0] || this.white[1] === this.black[1]) return true;
    // diagonal
    if (Math.abs(this.white[0] - this.black[0]) === Math.abs(this.white[1] - this.black[1])) return true;
    // nothing
    return false;
  }
}
