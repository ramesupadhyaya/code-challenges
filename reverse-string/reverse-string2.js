/*
  Reverse a string s using the traditional for loop.
*/

const reverseString = s => {
  try {
    // declare a var to assign the reversed string
    let newString = '';
    // loop through each of the string alphabets
    for (let i = 0; i < s.length; i += 1) {
      // prepend the each index value to newString
      newString = s[i] + newString;
    }
    // return the newly constructed string
    return newString;
  } catch (e) {
    return e.message;
  }
};

console.log(reverseString('rames')); // outputs semar
