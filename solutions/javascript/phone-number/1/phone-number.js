export const clean = inStr => {
  // disallowed characters
  if (/[a-zA-Z]/g.test(inStr)) throw new Error("Letters not permitted");
  if (/@:!/g.test(inStr)) throw new Error("Punctuations not permitted");

  // remove non-digits
  let digits = inStr.replace(/[^0-9]/g, '');

  // length checks
  if (digits.length < 10) throw new Error("Must not be fewer than 10 digits");
  if (digits.length > 11) throw new Error("Must not be greater than 11 digits");
  if (digits.length === 11) {
    if (digits[0] !== '1') throw new Error("11 digits must start with 1");
    digits = digits.substring(1);
  }

  // area and exchange code checks
  const areaCode = digits[0];
  const exchangeCode = digits[3];

  if (areaCode === '0')throw new Error ("Area code cannot start with zero");    
  if (areaCode === '1')throw new Error ("Area code cannot start with one");    
  if (exchangeCode === '0')throw new Error ("Exchange code cannot start with zero");    
  if (exchangeCode === '1')throw new Error ("Exchange code cannot start with one");
  
  return digits;
};