/**
 * Calculates the sum of all elements in an array.
 * @param {number[]} arr - The array of numbers to sum.
 * @returns {number} - The sum of the elements in the array.
 */
function mySumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/**
 * Removes duplicate elements from an array without using built-in functions like `push` or `indexOf`.
 * @param {number[]} arr - The array from which duplicates will be removed.
 * @returns {number[]} - A new array with duplicate elements removed.
 */
function myRemoveDuplicates(arr) {
  let unique = [];
  let isUnique;

  for (let i = 0; i < arr.length; i++) {
    isUnique = true;
    // Check if the current element is already in the `unique` array
    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        isUnique = false;
        break;
      }
    }
    // Add the element to `unique` array if it is not already present
    if (isUnique) {
      unique[unique.length] = arr[i];
    }
  }

  return unique;
}

/**
 * Finds the maximum value in an array.
 * @param {number[]} arr - The array to search for the maximum value.
 * @returns {number|undefined} - The maximum value in the array, or `undefined` if the array is empty.
 */
function myMaxArray(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * Finds the minimum value in an array.
 * @param {number[]} arr - The array to search for the minimum value.
 * @returns {number|undefined} - The minimum value in the array, or `undefined` if the array is empty.
 */
function myMinArray(arr) {
  if (arr.length === 0) return undefined;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

module.exports = {
  mySumArray,
  myRemoveDuplicates,
  myMaxArray,
  myMinArray,
};
