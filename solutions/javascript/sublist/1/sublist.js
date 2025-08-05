// A and B can be
// equal, superlist, sublist, unequal

export class List {
  constructor(values = []) {
    this.values = values;
  }

  compare(comparandum) {
    const a = this.values;
    const b = comparandum.values;

    if (a.length === b.length && a.every((val, i) => val === b[i])) {
      return 'EQUAL';
    }

    if (this.isSublist(a, b)) {
      return 'SUBLIST';
    }

    if (this.isSublist(b, a)) {
      return 'SUPERLIST';
    }

    return 'UNEQUAL';
  }

  isSublist(shorter, longer) {
    if (shorter.length === 0) return true;
    if (shorter.length > longer.length) return false;

    for (let i = 0; i <= longer.length - shorter.length; i++) {
      let match = true;
      for (let j = 0; j < shorter.length; j++) {
        if (longer[i + j] !== shorter[j]) {
          match = false;
          break;
        }
      }
      if (match) return true;
    }

    return false;
  }
}
