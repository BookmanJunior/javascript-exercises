const fibonacci = function (input) {
  const intInput = parseInt(input);
  const fibbArray = [0, 1];

  if (intInput < 0) return "OOPS";

  if (intInput === 0 || intInput === 1) return fibbArray[intInput];

  while (intInput > fibbArray.length) {
    const preslastNum = fibbArray.at(-2);
    const lastNum = fibbArray.at(-1);
    const newSeq = preslastNum + lastNum;
    fibbArray.push(newSeq);
  }

  let result = fibbArray[intInput - 1] + fibbArray[intInput - 2];
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
