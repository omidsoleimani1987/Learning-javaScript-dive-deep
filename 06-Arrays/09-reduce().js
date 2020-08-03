// reduce() : to combine the arrays elements to single value
const oldArray = [1, 2, 3];
const newArray = oldArray.reduce(
  (previousValue, currentValue, index, fullArray) => {
    // previousValue : initial value (optional) that we gave as a parameter
    // currentValue : values from the array one by one
    return previousValue + currentValue;
  },
  0
);
console.log(newArray); // 6
