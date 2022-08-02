export const getGcd = (x, y) => {
  let a = Math.max(x, y);
  let b = Math.min(x, y);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};
export default getGcd;