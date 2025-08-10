const DEFAULT_STUDENTS = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
];

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
};

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    const rows = diagram.split('\n').map(row => row.split(''));
    console.log(rows);
    this.__plants = {};
    this.__students = students.sort();
    
    for (let i = 0; i < this.__students.length; i++) {
      const student = this.__students[i];
      this.__plants[student] = [];
      
      // i will be 0 to 3
      // pick elements from the rows array
      // 0: idx * 2, idx * 2 + 1
      // 1: idx * 2, idx * 2 + 1
      // this.__plants[student].push(PLANT_CODES[rows[0][i*2]]);
      // this.__plants[student].push(PLANT_CODES[rows[0][i*2 + 1]]);
      // this.__plants[student].push(PLANT_CODES[rows[1][i*2]]);
      // this.__plants[student].push(PLANT_CODES[rows[1][i*2 + 1]]);

      // maybe slice and push?
      const rowOnePlants = rows[0].slice(i*2, i*2 + 2).map(seed => PLANT_CODES[seed]);
      const rowTwoPlants = rows[1].slice(i*2, i*2 + 2).map(seed => PLANT_CODES[seed]);

      this.__plants[student].push(...rowOnePlants, ...rowTwoPlants);
    }
  }

  plants(student) {
    return this.__plants[student];
  }
}
