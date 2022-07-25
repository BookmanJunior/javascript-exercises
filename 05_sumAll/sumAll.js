const sumAll = function(num1, num2) {
    let result = 0;
    if (num1 < 0 || num2 < 0 || typeof num1 !== "number"
     || typeof num2 !== "number") return "ERROR";
    
     if (num1 > num2) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }
    
    for (num1; num1 <= num2; num1++) {
        result += num1;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
