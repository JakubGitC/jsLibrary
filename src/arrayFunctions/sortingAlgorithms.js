/**
 * Sorts an array using the Bubble Sort algorithm.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function myBubbleSort(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap
      }
    }
  }
  return array;
}

/**
 * Sorts an array using the Selection Sort algorithm.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function mySelectionSort(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]]; // Swap
    }
  }
  return array;
}

/**
 * Sorts an array using the Insertion Sort algorithm.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function myInsertionSort(array) {
  let n = array.length;
  for (let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}

/**
 * Sorts an array using the Merge Sort algorithm.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function myMergeSort(array) {
  if (array.length <= 1) return array;

  /**
   * Merges two sorted arrays into one sorted array.
   * @param {number[]} left - The first sorted array.
   * @param {number[]} right - The second sorted array.
   * @returns {number[]} - A merged and sorted array.
   */
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(myMergeSort(left), myMergeSort(right));
}

/**
 * Sorts an array using the Quick Sort algorithm.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function myQuickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array[Math.floor(array.length / 2)];
  let left = array.filter((x) => x < pivot);
  let middle = array.filter((x) => x === pivot);
  let right = array.filter((x) => x > pivot);

  return [...myQuickSort(left), ...middle, ...myQuickSort(right)];
}
module.exports = {
  myBubbleSort,
  mySelectionSort,
  myInsertionSort,
  myMergeSort,
  myQuickSort,
};
