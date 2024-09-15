function myConnect(target, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
}

function myMerge(...objects) {
  return objects.reduce((acc, obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        acc[key] = obj[key];
      }
    }
    return acc;
  }, {});
}
function myIsEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !myIsEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

function myPick(obj, ...keys) {
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

function myOmit(obj, ...keys) {
  return Object.keys(obj).reduce((acc, key) => {
    if (!keys.includes(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

function myIsEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function myToObject(pairs) {
  let obj = {}; // Initialize an empty object

  for (var i = 0; i < pairs.length; i++) {
    let pair = pairs[i]; // Get the current pair
    let key = pair[0]; // Extract the key
    let value = pair[1]; // Extract the value
    obj[key] = value; // Assign the value to the key in the object
  }

  return obj; // Return the constructed object
}
function myInvert(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[obj[key]] = key;
    return acc;
  }, {});
}
module.exports = {
  myToObject,
  myConnect,
  myMerge,
  myIsEqual,
  myPick,
  myOmit,
  myInvert,
  myIsEmpty,
  myInvert,
};
