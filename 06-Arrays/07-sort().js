// for numbers for example:
const oldArray = [12, 3, 54, 23, -43];
const newArray = oldArray.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(newArray); // [ -43, 3, 12, 23, 54 ]

const anotherArray = newArray.reverse();
console.log(anotherArray); // [ 54, 23, 12, 3, -43 ]
