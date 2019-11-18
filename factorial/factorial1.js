/*
  Implement a function named factorial that has one parameter: an integer. 
  It must return the value of  (i.e., factorial).
  Eg. 4! = 4 * 3 * 2 * 1;
*/
const factorial = n => {
  // if n is 0 return 1, because factorial of 0 is 1
  if (n === 0) return 1;
  // assign n to fact so that you are not directly modifying the function parameter
  let fact = n;
  // loop through the input number with decrement until it reaches 1
  for (let i = n - 1; i > 0; i -= 1) {
    // add the multiplication of each iteration in the variable fact
    fact *= i;
  }
  // return fact
  return fact;
};

console.log(factorial(4)); // outputs 24
