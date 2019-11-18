/*
  Complete the function in the editor below by returning a RegExp object, re, that matches any string s that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.
*/

const regexVar = str => {
  // Declare re and construct RegExp expression
  const re = new RegExp(/^([a,e,i,o,u]).*\1$/);
  // test to see if the expression matches the string
  return re.test(str);
};

console.log(regexVar('abca')); // outputs true
console.log(regexVar('abcn')); // outputs false
