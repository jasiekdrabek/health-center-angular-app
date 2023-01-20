const jsSHA = require('jssha');

export const hashPassword = (password: string): string => {
  var hashObj = new jsSHA('SHA-512', 'TEXT', { numRounds: 1 });
  hashObj.update(password);
  var hash = hashObj.getHash('HEX');
  return hash;
};
