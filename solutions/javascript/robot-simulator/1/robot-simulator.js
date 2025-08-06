export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  directions = ['north', 'east', 'south', 'west'];
  constructor(direction = 'north', x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
  
  get bearing() {
    return this.direction;
  }

  get coordinates() {
    return [this.x, this.y];
  }

  place({ x, y, direction }) {
    if (!this.directions.includes(direction)) throw new InvalidInputError;
    this.direction = direction;
    this.x = x;
    this.y = y;
  }

  evaluate(evalStr) {
    for (let i = 0; i < evalStr.length; i++) {
      const action = evalStr[i];
      const directionIndex = this.directions.indexOf(this.direction);
      switch (action) {
        case 'R':
          this.direction = this.directions[(directionIndex + 1) % 4];
          break;
        case 'L':
          this.direction = this.directions[(directionIndex + 3) % 4];
          break;
        case 'A':
          this.x += (directionIndex === 1) - (directionIndex === 3);
          this.y += (directionIndex === 0) - (directionIndex === 2);
          break;
        default:
          throw new Error('Did not recognise command');
      }
    }
  }
}
