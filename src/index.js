module.exports = function reverse (n) {
    let num = (Math.abs(n)).toString();
  let result = '';
  for (let i = num.length - 1; i >= 0; i--) {
    result += num[i];
  }
  return +result;
}
