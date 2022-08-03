export const find7Check = number => {
  while (number) {
    if (number % 10 === 7) {
      return true;
    }
    number /= 10;
  }
  return false;
};
