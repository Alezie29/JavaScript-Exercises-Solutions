const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return 'ERROR' 
    }
let finalSum = 0; 
let startNum = Math.min(num1, num2);
let endNum = Math.max(num1, num2);

for (let i = startNum; i <= endNum; i++) {
    finalSum += i;
} 
return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
