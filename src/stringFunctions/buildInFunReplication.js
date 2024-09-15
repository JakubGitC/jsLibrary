/**
 * Calculates the length of a string.
 * @param {string} str - The string whose length is to be determined.
 * @returns {number} - The length of the string.
 */
function myStringLength(str) {
  let length = 0;
  while (str[length] !== undefined) {
    length++;
  }
  return length;
}

/**
 * Extracts a substring from a string, from `start` to `end`.
 * @param {string} str - The original string.
 * @param {number} start - The starting index of the substring.
 * @param {number} end - The ending index of the substring (exclusive).
 * @returns {string} - The extracted substring.
 */
function mySubstring(str, start, end) {
  let result = "";
  for (let i = start; i < end && i < str.length; i++) {
    result += str[i];
  }
  return result;
}

/**
 * Concatenates two strings.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {string} - The concatenated result of `str1` and `str2`.
 */
function myConcatenate(str1, str2) {
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    result += str1[i];
  }
  for (let i = 0; i < str2.length; i++) {
    result += str2[i];
  }
  return result;
}

/**
 * Replaces all occurrences of a `search` string with a `replacement` string in a given string.
 * @param {string} str - The original string.
 * @param {string} search - The substring to search for.
 * @param {string} replacement - The string to replace `search` with.
 * @returns {string} - The string with all occurrences of `search` replaced by `replacement`.
 */
function myReplace(str, search, replacement) {
  let result = "";
  let i = 0;
  while (i < str.length) {
    if (mySubstring(str, i, i + search.length) === search) {
      result += replacement;
      i += search.length;
    } else {
      result += str[i];
      i++;
    }
  }
  return result;
}

/**
 * Splits a string into an array of substrings using a specified delimiter.
 * @param {string} str - The string to split.
 * @param {string} delimiter - The delimiter used to split the string.
 * @returns {string[]} - An array of substrings.
 */
function mySplit(str, delimiter) {
  let result = [];
  let start = 0;
  let end = 0;

  while (end < str.length) {
    if (mySubstring(str, end, end + delimiter.length) === delimiter) {
      result.push(mySubstring(str, start, end));
      start = end + delimiter.length;
      end = start;
    } else {
      end++;
    }
  }
  result.push(mySubstring(str, start, end));
  return result;
}

/**
 * Trims whitespace from the beginning and end of a string.
 * @param {string} str - The string to trim.
 * @returns {string} - The trimmed string.
 */
function myTrim(str) {
  let start = 0;
  let end = str.length - 1;

  while (str[start] === " " && start <= end) {
    start++;
  }
  while (str[end] === " " && end >= start) {
    end--;
  }

  return mySubstring(str, start, end + 1);
}

/**
 * Converts all uppercase letters in a string to lowercase.
 * @param {string} str - The string to convert.
 * @returns {string} - The string with all uppercase letters converted to lowercase.
 */
function myToLowerCase(str) {
  const charCodeA = "A".charCodeAt(0);
  const charCodeZ = "Z".charCodeAt(0);
  const diff = "a".charCodeAt(0) - charCodeA;

  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= charCodeA && charCode <= charCodeZ) {
      result += String.fromCharCode(charCode + diff);
    } else {
      result += str[i];
    }
  }
  return result;
}

/**
 * Converts all lowercase letters in a string to uppercase.
 * @param {string} str - The string to convert.
 * @returns {string} - The string with all lowercase letters converted to uppercase.
 */
function myToUpperCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char >= "a" && char <= "z") {
      let upperChar = String.fromCharCode(char.charCodeAt(0) - 32);
      result += upperChar;
    } else {
      result += char;
    }
  }
  return result;
}
/**
 * Checks if a string contains a specified substring.
 * @param {string} str - The string to search within.
 * @param {string} search - The substring to search for.
 * @returns {boolean} - `true` if the substring is found; otherwise, `false`.
 */
function myIncludesStr(str, search) {
  for (let i = 0; i <= str.length - search.length; i++) {
    if (mySubstring(str, i, i + search.length) === search) {
      return true;
    }
  }
  return false;
}

/**
 * Reverses the characters in a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 */
function myReverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

module.exports = {
  myStringLength,
  mySubstring,
  myConcatenate,
  myReplace,
  mySplit,
  myTrim,
  myToLowerCase,
  myToUpperCase,
  myIncludesStr,
  myReverse,
};
