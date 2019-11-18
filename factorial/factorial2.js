/*
  Implement a function named factorial that has one parameter: an integer. 
  It must return the value of  (i.e., factorial).
  Eg. 4! = 4 * 3 * 2 * 1;
*/

const factorial = n => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(4)); // outputs 24
