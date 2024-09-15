/**
 * Adds one or more elements to the end of an array and returns the new length of the array.
 * @param {Array} array - The target array to which elements will be added.
 * @param {...*} items - The elements to add to the array.
 * @returns {number} - The new length of the array.
 */
function myPush(array, ...items) {
  for (const item of items) {
    array[array.length] = item;
  }
  return array.length;
}

/**
 * Removes the last element from an array and returns that element.
 * @param {Array} array - The target array from which the last element will be removed.
 * @returns {*} - The removed element or `undefined` if the array is empty.
 */
function myPop(array) {
  if (array.length === 0) return undefined;
  const item = array[array.length - 1];
  array.length = array.length - 1;
  return item;
}

/**
 * Removes the first element from an array and returns that element.
 * @param {Array} array - The target array from which the first element will be removed.
 * @returns {*} - The removed element or `undefined` if the array is empty.
 */
function myShift(array) {
  if (array.length === 0) return undefined;
  const item = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return item;
}

/**
 * Adds one or more elements to the beginning of an array and returns the new length of the array.
 * @param {Array} array - The target array to which elements will be added.
 * @param {...*} items - The elements to add to the array.
 * @returns {number} - The new length of the array.
 */
function myUnshift(array, ...items) {
  const length = array.length;
  array.length += items.length;
  for (let i = length - 1; i >= 0; i--) {
    array[i + items.length] = array[i];
  }
  for (let i = 0; i < items.length; i++) {
    array[i] = items[i];
  }
  return array.length;
}

/**
 * Merges multiple arrays into a single array.
 * @param {...Array} arrays - The arrays to merge.
 * @returns {Array} - A new array containing all the elements from the input arrays.
 */
function myConcat(...arrays) {
  const result = [];
  for (const array of arrays) {
    for (const item of array) {
      result.push(item);
    }
  }
  return result;
}

/**
 * Joins all elements of an array into a string with a specified separator.
 * @param {Array} array - The array whose elements will be joined.
 * @param {string} [separator=","] - The separator to use between elements.
 * @returns {string} - A string consisting of the array elements joined by the separator.
 */
function myJoin(array, separator = ",") {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (i > 0) result += separator;
    result += array[i];
  }
  return result;
}

/**
 * Creates a shallow copy of a portion of an array into a new array.
 * @param {Array} array - The array to slice.
 * @param {number} [start=0] - The beginning index (inclusive) of the slice.
 * @param {number} [end=array.length] - The ending index (exclusive) of the slice.
 * @returns {Array} - A new array containing the sliced elements.
 */
function mySlice(array, start = 0, end = array.length) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(array[i]);
  }
  return result;
}

/**
 * Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
 * @param {Array} array - The target array to modify.
 * @param {number} start - The starting index for modification.
 * @param {number} deleteCount - The number of elements to remove.
 * @param {...*} items - The elements to add to the array.
 * @returns {Array} - An array containing the deleted elements.
 */
function mySplice(array, start, deleteCount, ...items) {
  const deleted = [];
  for (let i = start; i < start + deleteCount; i++) {
    if (i < array.length) {
      deleted.push(array[i]);
    }
  }
  const newLength = array.length + items.length - deleteCount;
  for (let i = newLength - 1; i >= start + items.length; i--) {
    array[i] = array[i - items.length + deleteCount];
  }
  for (let i = 0; i < items.length; i++) {
    array[start + i] = items[i];
  }
  array.length = newLength;
  return deleted;
}

/**
 * Creates a new array with the results of calling a provided function on every element in the original array.
 * @param {Array} array - The array to iterate over.
 * @param {Function} callback - A function that will be called for each element.
 * @returns {Array} - A new array with the results of the callback function.
 */
function myMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

/**
 * Creates a new array with all elements that pass the test implemented by the provided function.
 * @param {Array} array - The array to filter.
 * @param {Function} callback - A function that will test each element.
 * @returns {Array} - A new array with the elements that pass the test.
 */
function myFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

/**
 * Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
 * @param {Array} array - The array to reduce.
 * @param {Function} callback - A function that will be called for each element.
 * @param {*} [initialValue] - The initial value to use as the first argument to the first call of the callback.
 * @returns {*} - The final value after all iterations.
 */
function myReduce(array, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  let startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

/**
 * Returns the first element in the array that satisfies the provided testing function.
 * @param {Array} array - The array to search.
 * @param {Function} callback - A function that will test each element.
 * @returns {*} - The first element that satisfies the testing function, or `undefined` if no element is found.
 */
function myFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}

/**
 * Determines whether an array contains a certain element.
 * @param {Array} array - The array to search.
 * @param {*} valueToFind - The value to search for.
 * @param {number} [fromIndex=0] - The index to start searching from.
 * @returns {boolean} - `true` if the array contains the value, `false` otherwise.
 */
function myIncludes(array, valueToFind, fromIndex = 0) {
  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === valueToFind) {
      return true;
    }
  }
  return false;
}

module.exports = {
  myPush,
  myPop,
  myShift,
  myUnshift,
  myConcat,
  myJoin,
  mySlice,
  mySplice,
  myMap,
  myFilter,
  myReduce,
  myFind,
  myIncludes,
};
