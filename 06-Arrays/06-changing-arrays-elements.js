/*
map() :
    creates a new array from each of items from old array without changing the old array, and there is no need to push each item to the new array like the forEach method 
*/
const oldArray = [11, 13];
const newArray = oldArray.map((theCurrentItem, indexOfTheItem, fullArray) => {
  return theCurrentItem + 10;
});
console.log(newArray); // [ 21, 23 ]

// we can make it shorter because of the power of arrow functions
const anotherArray = newArray.map((theCurrentItem) => theCurrentItem + 10);
console.log(anotherArray); // [ 31, 33 ]
