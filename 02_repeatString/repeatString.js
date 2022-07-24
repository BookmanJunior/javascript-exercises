// const repeatString = function(string, num) {
//     let result = '';
//     if (num < 0) {
//         return "ERROR";
//     } else {
//     while (num !== 0) {
//         result += string;
//         num--; 
//     }
//     return result;
// }
// };

const repeatString = function(string, num) {
    let result = '';
    if (num < 0) {
        return "ERROR";
    }
    for (; num > 0; num--) {
        result += string;
    }
    return result;
}

// Do not edit below this line
module.exports = repeatString;
