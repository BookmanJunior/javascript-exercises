const sumAll = function(num1, num2) {
    let result = 0;
    if (num1 > num2) {
        for (num1; num1 > num2; num1--) {
            result += num1;
        }
    }
    for (num1; num1 <= num2; num1++) {
        result += num1;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
