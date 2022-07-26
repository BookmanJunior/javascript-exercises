const removeFromArray = function(...args) {
    const array = args[0];
    return array.filter(val => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;

let newItems = removeFromArray([1, 2, 3, 4], 3)
console.log(newItems)
