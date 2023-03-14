const add = function(num1, num2) {
	let addSum = (num1 + num2);
  return addSum;
};

const subtract = function(num1, num2) {
	let subSum = (num1 - num2);
  return subSum;
};

const sum = function(arr) {
	let sumArr = 0; 
  for (let i = 0; i < arr.length; i++) {
    sumArr += arr[i];
  } 
  return sumArr;
};

const multiply = function(arr) {
  let result = 1; 
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i]; 
  }
  return result;
};

const power = function(num1, num2) {
	let powerSum = num1 ** num2;
  return powerSum;
};

const factorial = function(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
