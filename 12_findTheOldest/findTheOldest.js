const findTheOldest = function (array) {
  const currentYear = new Date().getFullYear();
  array.forEach((person) => {
    person.yearOfDeath ??= currentYear;
  });

  let oldestPerson;
  const calculateAge = array.reduce((obj, item) => {
    let calcAge = item.yearOfDeath - item.yearOfBirth;
    if (calcAge > obj) {
      obj = calcAge;
      oldestPerson = item;
    }
    return obj;
  }, 0);
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
