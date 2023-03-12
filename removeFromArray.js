const removeFromArray = function(arr, ...args) {
  let filteredArr = arr.filter(item => !args.includes(item));
  return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
