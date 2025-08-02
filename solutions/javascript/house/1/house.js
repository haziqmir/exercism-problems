export class House {
  static verse(n) {
    const lines = [
      {name: 'house that Jack built.'},
      {name: 'malt', action: 'lay in'},
      {name: 'rat', action: 'ate'},
      {name: 'cat', action: 'killed'},
      {name: 'dog', action: 'worried'},
      {name: 'cow with the crumpled horn', action: 'tossed'},
      {name: 'maiden all forlorn', action: 'milked'},
      {name: 'man all tattered and torn', action: 'kissed'},
      {name: 'priest all shaven and shorn', action: 'married'},
      {name: 'rooster that crowed in the morn', action: 'woke'},
      {name: 'farmer sowing his corn', action: 'kept'},
      {name: 'horse and the hound and the horn', action: 'belonged to'},
    ];

    const idx = n - 1;
    const lyrics = [`This is the ${lines[idx].name}`];

    for (let i = idx; i > 0; i--) {
      lyrics.push(`that ${lines[i].action} the ${lines[i-1].name}`);
    }

    return lyrics;
  }

  static verses(start, end) {
    const result = [];

    for (let i = start; i <= end; i++) {
      result.push(...this.verse(i));
      if (i !== end) result.push('');
    }

    return result;
  }
}