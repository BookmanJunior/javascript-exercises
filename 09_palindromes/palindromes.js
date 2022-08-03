const palindromes = function (string) {
  const filteredString = string.toLowerCase().replace(/[^a-z]/g, "");
  const reversedString = filteredString.split("").reverse().join("");
  return reversedString === filteredString;
};

// Do not edit below this line
module.exports = palindromes;
