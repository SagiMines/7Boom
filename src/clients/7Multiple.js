export const multiple7Check = number => {
  if (!(number % 7)) {
    return true;
  }
  return false;
};

export const multuple7Answer = number => {
  multiple7Check(number) ? console.log('BOOM') : null;
};