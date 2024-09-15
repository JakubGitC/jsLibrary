const {
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
} = require("../src/arrayFunctions/buildInFunReplication.js");

const {
  myBubbleSort,
  mySelectionSort,
  myInsertionSort,
  myMergeSort,
  myQuickSort,
} = require("../src/arrayFunctions/sortingAlgorithms.js");

const {
  mySumArray,
  myRemoveDuplicates,
  myMaxArray,
  myMinArray,
} = require("../src/arrayFunctions/utilityFunctions.js");

const {
  myFactorial,
  myFibonacci,
  myIsPrime,
  myPower,
} = require("../src/numberFunctions/mathematicalFun.js");

const {
  myConnect,
  myMerge,
  myIsEqual,
  myPick,
  myOmit,
  myIsEmpty,
  myToObject,
  myInvert,
} = require("../src/objectFunctions/utilityFunctions.js");

const {
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
} = require("../src/stringFunctions/buildInFunReplication.js");

const {
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
} = require("../src/stringFunctions/utilityFunctions.js");

describe("My Own Created JS Built-in Array Functions", () => {
  test("myPush adds elements to the end of an array and returns the new length", () => {
    const arr = [1, 2, 3];
    const newLength = myPush(arr, 4, 5);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
    expect(newLength).toBe(5);
  });

  test("myPop removes the last element from an array and returns it", () => {
    const arr = [1, 2, 3];
    const removedElement = myPop(arr);
    expect(arr).toEqual([1, 2]);
    expect(removedElement).toBe(3);
  });

  test("myShift removes the first element from an array and returns it", () => {
    const arr = [1, 2, 3];
    const removedElement = myShift(arr);
    expect(arr).toEqual([2, 3]);
    expect(removedElement).toBe(1);
  });

  test("myUnshift adds elements to the beginning of an array and returns the new length", () => {
    const arr = [3, 4, 5];
    const newLength = myUnshift(arr, 1, 2);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
    expect(newLength).toBe(5);
  });

  test("myConcat merges multiple arrays into a single array", () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const result = myConcat(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("myJoin joins all elements of an array into a string with a specified separator", () => {
    const arr = [1, 2, 3];
    expect(myJoin(arr)).toBe("1,2,3");
    expect(myJoin(arr, "-")).toBe("1-2-3");
  });

  test("mySlice creates a shallow copy of a portion of an array into a new array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(mySlice(arr, 1, 3)).toEqual([2, 3]);
    expect(mySlice(arr, 2)).toEqual([3, 4, 5]);
  });

  test("mySplice removes/replaces/adds elements in an array and returns the removed elements", () => {
    const arr = [1, 2, 3, 4, 5];
    const removed = mySplice(arr, 2, 2, "a", "b");
    expect(arr).toEqual([1, 2, "a", "b", 5]);
    expect(removed).toEqual([3, 4]);
  });

  test("myMap creates a new array with the results of a callback function", () => {
    const arr = [1, 2, 3];
    const result = myMap(arr, (x) => x * 2);
    expect(result).toEqual([2, 4, 6]);
  });

  test("myFilter creates a new array with elements that pass the test", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = myFilter(arr, (x) => x > 2);
    expect(result).toEqual([3, 4, 5]);
  });

  test("myReduce applies a function against an accumulator and each element to reduce it to a single value", () => {
    const arr = [1, 2, 3, 4];
    const sum = myReduce(arr, (acc, x) => acc + x, 0);
    expect(sum).toBe(10);
  });

  test("myFind returns the first element that satisfies the testing function", () => {
    const arr = [1, 2, 3, 4];
    const result = myFind(arr, (x) => x > 2);
    expect(result).toBe(3);
  });

  test("myIncludes determines whether an array contains a certain element", () => {
    const arr = [1, 2, 3];
    expect(myIncludes(arr, 2)).toBe(true);
    expect(myIncludes(arr, 4)).toBe(false);
  });
});

describe("Sorting Algorithms", () => {
  // Helper function to check if an array is sorted
  const isSorted = (array) => {
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) return false;
    }
    return true;
  };

  // Test cases for bubble sort
  test("myBubbleSort sorts an array in ascending order", () => {
    const arr = [64, 34, 25, 12, 22, 11, 90];
    const sortedArr = myBubbleSort([...arr]);
    expect(isSorted(sortedArr)).toBe(true);
    expect(sortedArr).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  // Test cases for selection sort
  test("mySelectionSort sorts an array in ascending order", () => {
    const arr = [64, 34, 25, 12, 22, 11, 90];
    const sortedArr = mySelectionSort([...arr]);
    expect(isSorted(sortedArr)).toBe(true);
    expect(sortedArr).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  // Test cases for insertion sort
  test("myInsertionSort sorts an array in ascending order", () => {
    const arr = [64, 34, 25, 12, 22, 11, 90];
    const sortedArr = myInsertionSort([...arr]);
    expect(isSorted(sortedArr)).toBe(true);
    expect(sortedArr).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  // Test cases for merge sort
  test("myMergeSort sorts an array in ascending order", () => {
    const arr = [64, 34, 25, 12, 22, 11, 90];
    const sortedArr = myMergeSort([...arr]);
    expect(isSorted(sortedArr)).toBe(true);
    expect(sortedArr).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  // Test cases for quick sort
  test("myQuickSort sorts an array in ascending order", () => {
    const arr = [64, 34, 25, 12, 22, 11, 90];
    const sortedArr = myQuickSort([...arr]);
    expect(isSorted(sortedArr)).toBe(true);
    expect(sortedArr).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  // Test with an empty array
  test("myBubbleSort handles an empty array", () => {
    const arr = [];
    expect(myBubbleSort(arr)).toEqual([]);
  });

  // Test with an array with one element
  test("myBubbleSort handles an array with one element", () => {
    const arr = [1];
    expect(myBubbleSort(arr)).toEqual([1]);
  });

  // Test with already sorted array
  test("myBubbleSort handles an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(myBubbleSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("Array Utility Functions", () => {
  // Test for mySumArray
  test("mySumArray calculates the sum of all elements in an array", () => {
    expect(mySumArray([1, 2, 3, 4, 5])).toBe(15);
    expect(mySumArray([-1, -2, -3])).toBe(-6);
    expect(mySumArray([0, 0, 0])).toBe(0);
    expect(mySumArray([])).toBe(0); // Edge case: empty array
  });

  // Test for myRemoveDuplicates
  test("myRemoveDuplicates removes duplicate elements from an array", () => {
    expect(myRemoveDuplicates([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(myRemoveDuplicates([1, 1, 1, 1])).toEqual([1]);
    expect(myRemoveDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
    expect(myRemoveDuplicates([])).toEqual([]); // Edge case: empty array
  });

  // Test for myMaxArray
  test("myMaxArray finds the maximum value in an array", () => {
    expect(myMaxArray([1, 2, 3, 4, 5])).toBe(5);
    expect(myMaxArray([-10, -20, -30])).toBe(-10);
    expect(myMaxArray([5])).toBe(5); // Single element array
    expect(myMaxArray([])).toBeUndefined(); // Edge case: empty array
  });

  // Test for myMinArray
  test("myMinArray finds the minimum value in an array", () => {
    expect(myMinArray([1, 2, 3, 4, 5])).toBe(1);
    expect(myMinArray([-10, -20, -30])).toBe(-30);
    expect(myMinArray([5])).toBe(5); // Single element array
    expect(myMinArray([])).toBeUndefined(); // Edge case: empty array
  });
});

describe("Mathematical Functions ", () => {
  test("myFactorial calculates factorial of 0 correctly", () => {
    expect(myFactorial(0)).toBe(1);
  });

  test("myFactorial calculates factorial of 5 correctly", () => {
    expect(myFactorial(5)).toBe(120);
  });

  test("myFactorial returns NaN for negative numbers", () => {
    expect(myFactorial(-1)).toBeNaN();
  });

  test("myFibonacci calculates the 0th Fibonacci number correctly", () => {
    expect(myFibonacci(0)).toBe(0);
  });

  test("myFibonacci calculates the 5th Fibonacci number correctly", () => {
    expect(myFibonacci(5)).toBe(5);
  });

  test("myFibonacci returns NaN for negative indices", () => {
    expect(myFibonacci(-1)).toBeNaN();
  });

  test("myIsPrime identifies 2 as a prime number", () => {
    expect(myIsPrime(2)).toBe(true);
  });

  test("myIsPrime identifies 4 as not a prime number", () => {
    expect(myIsPrime(4)).toBe(false);
  });

  test("myIsPrime identifies 17 as a prime number", () => {
    expect(myIsPrime(17)).toBe(true);
  });

  test("myIsPrime returns false for numbers less than 2", () => {
    expect(myIsPrime(0)).toBe(false);
    expect(myIsPrime(1)).toBe(false);
  });

  test("myPower calculates 2 raised to the power of 3 correctly", () => {
    expect(myPower(2, 3)).toBe(8);
  });

  test("myPower calculates 5 raised to the power of 0 correctly", () => {
    expect(myPower(5, 0)).toBe(1);
  });

  test("myPower calculates 2 raised to the power of -2 correctly", () => {
    expect(myPower(2, -2)).toBe(0.25);
  });
});

describe("Object Utility Functions", () => {
  test("myConnect merges properties from source object into target object", () => {
    const target = { a: 1 };
    const source = { b: 2, c: 3 };
    myConnect(target, source);
    expect(target).toEqual({ a: 1, b: 2, c: 3 });
  });

  test("myMerge merges multiple objects into one", () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    expect(myMerge(obj1, obj2, obj3)).toEqual({ a: 1, b: 2, c: 3 });
  });

  test("myMerge overwrites properties from later objects", () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 2, b: 2 };
    expect(myMerge(obj1, obj2)).toEqual({ a: 2, b: 2 });
  });

  test("myIsEqual returns true for identical objects", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(myIsEqual(obj1, obj2)).toBe(true);
  });

  test("myIsEqual returns false for non-identical objects", () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 2 };
    expect(myIsEqual(obj1, obj2)).toBe(false);
  });

  test("myIsEqual returns false for different types", () => {
    expect(myIsEqual(1, "1")).toBe(false);
  });

  test("myPick picks specified properties from an object", () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(myPick(obj, "a", "c")).toEqual({ a: 1, c: 3 });
  });

  test("myPick returns an empty object if no keys are provided", () => {
    const obj = { a: 1, b: 2 };
    expect(myPick(obj)).toEqual({});
  });

  test("myOmit omits specified properties from an object", () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(myOmit(obj, "b")).toEqual({ a: 1, c: 3 });
  });

  test("myOmit returns the original object if no keys are provided", () => {
    const obj = { a: 1, b: 2 };
    expect(myOmit(obj)).toEqual({ a: 1, b: 2 });
  });

  test("myIsEmpty returns true for an empty object", () => {
    expect(myIsEmpty({})).toBe(true);
  });

  test("myIsEmpty returns false for a non-empty object", () => {
    expect(myIsEmpty({ a: 1 })).toBe(false);
  });

  test("myToObject converts an array of pairs to an object", () => {
    const pairs = [
      ["a", 1],
      ["b", 2],
    ];
    expect(myToObject(pairs)).toEqual({ a: 1, b: 2 });
  });

  test("myToObject returns an empty object for an empty array", () => {
    expect(myToObject([])).toEqual({});
  });

  test("myInvert inverts an object’s keys and values", () => {
    const obj = { a: 1, b: 2 };
    expect(myInvert(obj)).toEqual({ 1: "a", 2: "b" });
  });

  test("myInvert handles objects with non-unique values", () => {
    const obj = { a: 1, b: 1 };
    expect(myInvert(obj)).toEqual({ 1: "b" });
  });
});

describe("My Own Created JS Built-in String Functions", () => {
  test("myStringLength returns the length of a string", () => {
    expect(myStringLength("hello")).toBe(5);
    expect(myStringLength("")).toBe(0);
    expect(myStringLength("   ")).toBe(3);
  });

  test("mySubstring extracts a substring from a string", () => {
    expect(mySubstring("hello", 0, 5)).toBe("hello");
    expect(mySubstring("hello", 1, 4)).toBe("ell");
    expect(mySubstring("hello", 3, 10)).toBe("lo");
  });

  test("myConcatenate concatenates two strings", () => {
    expect(myConcatenate("hello", "world")).toBe("helloworld");
    expect(myConcatenate("", "world")).toBe("world");
    expect(myConcatenate("hello", "")).toBe("hello");
  });

  test("myReplace replaces all occurrences of a substring", () => {
    expect(myReplace("hello world", "world", "there")).toBe("hello there");
    expect(myReplace("hello hello", "hello", "hi")).toBe("hi hi");
    expect(myReplace("test", "notfound", "replace")).toBe("test");
  });

  test("mySplit splits a string into an array of substrings", () => {
    expect(mySplit("a,b,c", ",")).toEqual(["a", "b", "c"]);
    expect(mySplit("hello world", " ")).toEqual(["hello", "world"]);
    expect(mySplit("hello", ",")).toEqual(["hello"]);
  });

  test("myTrim removes whitespace from the beginning and end of a string", () => {
    expect(myTrim("  hello  ")).toBe("hello");
    expect(myTrim("no space")).toBe("no space");
    expect(myTrim("   ")).toBe("");
  });

  test("myToLowerCase converts all uppercase letters to lowercase", () => {
    expect(myToLowerCase("Hello World")).toBe("hello world");
    expect(myToLowerCase("JAVA")).toBe("java");
    expect(myToLowerCase("nochange")).toBe("nochange");
  });

  test("myToUpperCase converts all lowercase letters to uppercase", () => {
    expect(myToUpperCase("Hello World")).toBe("HELLO WORLD");
    expect(myToUpperCase("java")).toBe("JAVA");
    expect(myToUpperCase("nochange")).toBe("NOCHANGE");
  });

  test("myIncludesStr checks if a string contains a specified substring", () => {
    expect(myIncludesStr("hello world", "world")).toBe(true);
    expect(myIncludesStr("hello world", "foo")).toBe(false);
    expect(myIncludesStr("hello", "")).toBe(true);
  });

  test("myReverse reverses the characters in a string", () => {
    expect(myReverse("hello")).toBe("olleh");
    expect(myReverse("world")).toBe("dlrow");
    expect(myReverse("a")).toBe("a");
    expect(myReverse("")).toBe("");
  });
});

describe("String Utilities", () => {
  test("myRandomString generates a string of the specified length", () => {
    expect(myRandomString(10).length).toBe(10);
    expect(myRandomString(5).length).toBe(5);
  });

  test("myTrimString removes whitespace from both ends of a string", () => {
    expect(myTrimString("   hello   ")).toBe("hello");
    expect(myTrimString("   hello")).toBe("hello");
    expect(myTrimString("hello   ")).toBe("hello");
    expect(myTrimString("   ")).toBe("");
  });

  test("myContainsString checks if a string contains another string", () => {
    expect(myContainsString("hello world", "world")).toBe(true);
    expect(myContainsString("hello world", "worlds")).toBe(false);
  });

  test("myReverseString reverses a string", () => {
    expect(myReverseString("hello")).toBe("olleh");
    expect(myReverseString("abc")).toBe("cba");
  });

  test("myIsPalindrome checks if a string is a palindrome", () => {
    expect(myIsPalindrome("A man a plan a canal Panama")).toBe(true);
    expect(myIsPalindrome("hello")).toBe(false);
  });

  test("myRemoveAccents removes accents from characters", () => {
    expect(myRemoveAccents("áéíóúü")).toBe("aeiouu");
    expect(myRemoveAccents("ÇçñÑ")).toBe("CcnN");
  });

  test("myCountOccurrences counts the occurrences of a substring", () => {
    expect(myCountOccurrences("hello hello hello", "hello")).toBe(3);
    expect(myCountOccurrences("hello world", "world")).toBe(1);
  });

  test("myFindLongestWord finds the longest word in a string", () => {
    expect(myFindLongestWord("The quick brown fox")).toBe("quick brown");
    expect(
      myFindLongestWord("a b c d e f g h i j k l m n o p q r s t u v w x y z")
    ).toBe("a b c d e f g h i j k l m n o p q r s t u v w x y z");
  });

  test("myRemoveVowels removes all vowels from a string", () => {
    expect(myRemoveVowels("hello")).toBe("hll");
    expect(myRemoveVowels("aeiou")).toBe("");
  });

  test("myReplaceAll replaces all occurrences of a character in a string", () => {
    expect(myReplaceAll("hello world", "o", "0")).toBe("hell0 w0rld");
    expect(myReplaceAll("hello", "l", "x")).toBe("hexxo");
  });

  test("myToTitleCase converts a string to title case", () => {
    expect(myToTitleCase("hello world")).toBe("Hello World");
    expect(myToTitleCase("javascript is awesome")).toBe(
      "Javascript Is Awesome"
    );
  });

  test("myToSentenceCase converts a string to sentence case", () => {
    expect(myToSentenceCase("hello world")).toBe("Hello world");
    expect(myToSentenceCase("javaScript is awesome")).toBe(
      "Javascript is awesome"
    );
  });
});
