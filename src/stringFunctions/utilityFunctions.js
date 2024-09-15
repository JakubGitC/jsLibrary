/**
 * Generates a random string of a specified length using a given seed.
 * The string is composed of characters from the 'chars' set.
 *
 * @param {number} length - The length of the random string to generate.
 * @param {number} seed - The initial seed value to ensure repeatability.
 * @returns {string} A random string of the specified length.
 */
function myRandomString(length = 8, seed = 1) {
  /**
   * Generates a pseudo-random number between 0 and 1 based on a seed.
   * The algorithm is a simple linear congruential generator.
   *
   * @param {number} seed - The initial seed value.
   * @returns {number} A pseudo-random number between 0 and 1.
   */
  function simpleRandom(seed) {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  }
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    seed = simpleRandom(seed);
    const randomIndex = Math.floor(seed * chars.length);
    result += chars[randomIndex];
  }
  return result;
}

/**
 * Removes whitespace from the beginning and end of a string.
 * @param {string} str - The string to process.
 * @return {string} - The trimmed string.
 */
function myTrimString(str) {
  let start = 0;
  let end = str.length - 1;

  // Find the first non-whitespace character from the beginning
  while (start <= end && str[start] === " ") {
    start++;
  }

  // Find the first non-whitespace character from the end
  while (end >= start && str[end] === " ") {
    end--;
  }

  // Return the substring from start to end
  return str.substring(start, end + 1);
}

/**
 * Checks if a string contains another string.
 * @param {string} str - The string to search within.
 * @param {string} search - The string to search for.
 * @return {boolean} - True if the string contains the search string, false otherwise.
 */
function myContainsString(str, search) {
  const searchLength = search.length;
  const strLength = str.length;

  for (let i = 0; i <= strLength - searchLength; i++) {
    let j;
    for (j = 0; j < searchLength; j++) {
      if (str[i + j] !== search[j]) {
        break;
      }
    }
    if (j === searchLength) {
      return true;
    }
  }
  return false;
}

/**
 * Reverses a string.
 * @param {string} str - The string to reverse.
 * @return {string} - The reversed string.
 */
function myReverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
/**
 * Checks if a string is a palindrome.
 * @param {string} str - The string to check.
 * @return {boolean} - True if the string is a palindrome, false otherwise.
 */
function myIsPalindrome(str) {
  let cleanedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    ) {
      cleanedStr += char.toLowerCase();
    }
  }

  const reversedStr = myReverseString(cleanedStr);

  return cleanedStr === reversedStr;
}
/**
 * Removes accents from characters, converting them to their non-accented counterparts.
 * @param {string} str - The string to process.
 * @return {string} - The string with accents removed.
 */
function myRemoveAccents(str) {
  const accentsMap = {
    á: "a",
    à: "a",
    ã: "a",
    ä: "a",
    å: "a",
    é: "e",
    è: "e",
    ê: "e",
    ë: "e",
    í: "i",
    ì: "i",
    î: "i",
    ï: "i",
    ó: "o",
    ò: "o",
    õ: "o",
    ö: "o",
    ú: "u",
    ù: "u",
    û: "u",
    ü: "u",
    ñ: "n",
    ç: "c",
    Á: "A",
    À: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    É: "E",
    È: "E",
    Ê: "E",
    Ë: "E",
    Í: "I",
    Ì: "I",
    Î: "I",
    Ï: "I",
    Ó: "O",
    Ò: "O",
    Õ: "O",
    Ö: "O",
    Ú: "U",
    Ù: "U",
    Û: "U",
    Ü: "U",
    Ç: "C",
    Ñ: "N",
  };

  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    result += accentsMap[char] || char;
  }

  return result;
}

/**
 * Counts the number of occurrences of a substring within a string.
 * @param {string} str - The string to search within.
 * @param {string} search - The substring to count.
 * @return {number} - The number of occurrences of the substring.
 */
function myCountOccurrences(str, search) {
  let count = 0;
  let position = 0;

  while ((position = str.indexOf(search, position)) !== -1) {
    count++;
    position += search.length; // Move past the last found occurrence
  }

  return count;
}

/**
 * Finds the longest word in a string.
 * @param {string} str - The string to process.
 * @return {string} - The longest word in the string.
 */

function myFindLongestWord(str) {
  const words = str.split(/\s+/);
  let longestLength = 0;
  let longestWords = [];

  for (const word of words) {
    if (word.length > longestLength) {
      longestLength = word.length;
      longestWords = [word];
    } else if (word.length === longestLength) {
      longestWords.push(word);
    }
  }

  return longestWords.join(" ");
}

/**
 * Removes all vowels from a string.
 * @param {string} str - The string to process.
 * @return {string} - The string with vowels removed.
 */
function myRemoveVowels(str) {
  const vowels = "aeiouAEIOU";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

/**
 * Replaces all occurrences of a character in a string.
 * @param {string} str - The string to process.
 * @param {string} target - The character to replace.
 * @param {string} replacement - The character to replace with.
 * @return {string} - The string with characters replaced.
 */
function myReplaceAll(str, target, replacement) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      result += replacement;
    } else {
      result += str[i];
    }
  }
  return result;
}

/**
 * Converts a string to title case.
 * @param {string} str - The string to convert.
 * @return {string} - The string in title case.
 */
function myToTitleCase(str) {
  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === " ") {
      capitalizeNext = true;
      result += char;
    } else {
      if (capitalizeNext) {
        result += char.toUpperCase();
        capitalizeNext = false;
      } else {
        result += char.toLowerCase();
      }
    }
  }

  return result;
}
/**
 * Converts a string to sentence case.
 * @param {string} str - The string to convert.
 * @return {string} - The string in sentence case.
 */
function myToSentenceCase(str) {
  if (str.length === 0) return str; // Handle empty string

  // Capitalize the first letter of the string and make the rest lowercase
  const firstChar = str[0].toUpperCase();
  const restOfString = str.slice(1).toLowerCase();

  return firstChar + restOfString;
}
module.exports = {
  myRandomString,
  myTrimString,
  myContainsString,
  myReverseString,
  myIsPalindrome,
  myRemoveAccents,
  myCountOccurrences,
  myFindLongestWord,
  myRemoveVowels,
  myReplaceAll,
  myToTitleCase,
  myToSentenceCase,
};
