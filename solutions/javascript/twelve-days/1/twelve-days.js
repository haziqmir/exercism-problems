const gifts = [
  {day: 'first', gift: 'a Partridge in a Pear Tree'},
  {day: 'second', gift: 'two Turtle Doves'},
  {day: 'third', gift: 'three French Hens'},
  {day: 'fourth', gift: 'four Calling Birds'},
  {day: 'fifth', gift: 'five Gold Rings'},
  {day: 'sixth', gift: 'six Geese-a-Laying'},
  {day: 'seventh', gift: 'seven Swans-a-Swimming'},
  {day: 'eighth', gift: 'eight Maids-a-Milking'},
  {day: 'ninth', gift: 'nine Ladies Dancing'},
  {day: 'tenth', gift: 'ten Lords-a-Leaping'},
  {day: 'eleventh', gift: 'eleven Pipers Piping'},
  {day: 'twelfth', gift: 'twelve Drummers Drumming'},
];

const verse = thDay => {
  const idx = thDay - 1;

  const lines = [];
  for (let i = idx; i >= 0; i--) {
    let gift = gifts[i].gift;
    if (i === 0 && idx > 0) gift = `and ${gift}`;
    lines.push(gift);    
  }
  return `On the ${gifts[idx].day} day of Christmas my true love gave to me: ${lines.join(', ')}.\n`;
}

export const recite = (start, end = start) => {
  const lines = [];
  for (let i = start; i <= end; i++) {
    lines.push(verse(i));
  }
  return lines.join('\n');
};
