const oldArray = [11, 43, 25, -68, 45.4, 2, 100];

const newArray = oldArray.filter(
  (theCurrentItem, indexOfTheItem, fullArray) => {
    // true to keep element and false to drop it
    return theCurrentItem > 20;
  }
);
console.log(newArray); // [ 43, 25, 45.4, 100 ]

// or shorter:
const anotherArray = oldArray.filter((theCurrentItem) => theCurrentItem < 20);
console.log(anotherArray); // [ 11, -68, 2 ]
