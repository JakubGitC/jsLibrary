/**
 * Calculates the factorial of a non-negative integer n.
 * @param {number} n - The number to calculate the factorial of.
 * @returns {number} - The factorial of n or NaN for negative values.
 */
function myFactorial(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Calculates the n-th Fibonacci number.
 * @param {number} n - The index of the Fibonacci sequence to retrieve.
 * @returns {number} - The n-th Fibonacci number or NaN for negative indices.
 */
function myFibonacci(n) {
  if (n < 0) return NaN;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1,
    c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

/**
 * Checks if a number is a prime number.
 * @param {number} n - The number to check for primality.
 * @returns {boolean} - True if n is a prime number, false otherwise.
 */
function myIsPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

/**
 * Computes the power of a base raised to an exponent.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent to raise the base to.
 * @returns {number} - The result of base raised to the exponent.
 */
function myPower(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent < 0) return 1 / myPower(base, -exponent);

  let result = 1;
  while (exponent > 0) {
    if (exponent % 2 === 1) result *= base;
    base *= base;
    exponent = Math.floor(exponent / 2);
  }
  return result;
}

module.exports = {
  myFactorial,
  myFibonacci,
  myIsPrime,
  myPower,
};
