const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  const sumOfNumbers = array.reduce(
    (previousNum, currentNum) => previousNum + currentNum,
    0
  );
  return sumOfNumbers;
};

const multiply = function (array) {
  let total = 1;
  for (const item of array) {
    total *= item;
  }
  return total;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let total = 1;
  if (num === 0 || num === 1) {
    return 1;
  }
  for (num; num > 1; num--) {
    total *= num;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
