/**
 * Generate random number
 * @param {number} maxNum max value
 * @returns a random number
 */
function generateRandomNum(maxNum) {
  return Math.floor(Math.random() * maxNum + 1);
}

export default generateRandomNum;
