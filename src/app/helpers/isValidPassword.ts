export const isValidPassword = (password: string): boolean => {
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (password.match(passw)) return true;
  return false;
};
