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

const oldArray2 = ['omid', 'mely', 'max'];
const newArray2 = oldArray2.reduce(
  (previousValue, currentValue, index, fullArray) => {
    // previousValue : initial value (optional) that we gave as a parameter
    // currentValue : values from the array one by one
    return previousValue + ' ' + currentValue;
  },
  'our three names: '
);
console.log(newArray2); // our three names:  omid mely max
