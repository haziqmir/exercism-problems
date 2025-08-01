export const translate = rnaString => {
  if (!rnaString) return [];
  const proteins = [];
  for (let i = 0; i < rnaString.length; i += 3) {
    const currentCodon = codonToAminoAcid(rnaString.slice(i,i+3));
    if (currentCodon === 'STOP') break;
    proteins.push(currentCodon);
  }
  return proteins;
};

const codonToAminoAcid = codon => {
  switch (codon) {
    case 'AUG':
      return 'Methionine';
    case 'UUU':
    case 'UUC':
      return 'Phenylalanine';
    case 'UUA':
    case 'UUG':
      return 'Leucine';
    case 'UCU':
    case 'UCC':
    case 'UCA':
    case 'UCG':
      return 'Serine';
    case 'UAU':
    case 'UAC':
      return 'Tyrosine';
    case 'UGU':
    case 'UGC':
      return 'Cysteine';
    case 'UGG':
      return 'Tryptophan';
    case 'UAA':
    case 'UAG':
    case 'UGA':
      return 'STOP';
    default:
      throw new Error('Invalid codon');
  }
}