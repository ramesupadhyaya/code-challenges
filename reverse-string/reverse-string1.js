/*
  Reverse string s using the split, reverse, and join methods
*/

const reverseString = s => {
  try {
    // split the string, reverse it and finally join
    const newString = s
      .split('')
      .reverse()
      .join('');
    return newString;
  } catch (e) {
    return e.message;
  }
};

console.log(reverseString('abc')); // outputs cba
