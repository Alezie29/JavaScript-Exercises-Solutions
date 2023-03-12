const repeatString = function(string, num) {
if (num < 0) {
    return 'ERROR';
  }
  
let result = '';
for (let i = 0; i < num; i++) {
    result += string;
} 
    return result;
};

// Do not edit below this line
module.exports = repeatString;


// make a function that passes through a string and a number as its two arguments. Use a loop and create a variable to hold the string you're going to return, create a loop that repeats the given number of times and add the given string to the result on each loop.

// repeatString('hey', 3) // returns 'heyheyhey'

// Take note of the above function call- how exactly is it being called?

// You're going to want to use a loop for this one.

// Create a variable to hold the string you're going to return, create a loop that repeats the given number of times and add the given string to the result on each loop.
