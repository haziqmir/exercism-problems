export const proverb = (...args) => {
  if (args.length === 0) return '';

  const maybeQualifier = args[args.length - 1];
  const isQualifier = maybeQualifier && typeof maybeQualifier === 'object' && !Array.isArray(maybeQualifier);
  const { qualifier = '' } = isQualifier ? args.pop() : '';
  
  const lines = [];
  for (let i = 0; i < args.length - 1; i++) {
    lines.push(`For want of a ${args[i]} the ${args[i+1]} was lost.`);
  }
  lines.push(`And all for the want of a ${qualifier ? qualifier + ' ' : ''}${args[0]}.`);
  return lines.join('\n');
};
