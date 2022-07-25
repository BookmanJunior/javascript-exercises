const ftoc = function(tempF) {
  let calculate = (tempF - 32) * 5/9
  return Math.round(calculate * 10) / 10;
};

const ctof = function(tempC) {
  let calculate = (tempC * 9/5) + 32;
  return Math.round(calculate * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
