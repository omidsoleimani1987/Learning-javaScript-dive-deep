const oldArray = [1, 2, 3, 4, 5];

// slice() :
const newArray = oldArray.slice(); // [ 1, 2, 3, 4, 5 ]
//todo) makes a copy of the array and assign it to new variable instead of an reference address from the old array:
const first = [1, 2];
const second = first.slice();

first.push(3);
console.log(first, second); //[ 1, 2, 3 ] [ 1, 2 ]
//!) this rule does NOT contain the objects:
const objOne = [{ name: 'omid' }];
const objTwo = objOne.slice();

console.log(objOne[0].name); // 'omid'
console.log(objTwo[0].name); // 'omid'
objOne[0].name = 'max';
console.log(objOne[0].name); // 'max'
console.log(objTwo[0].name); // 'max'

// slice(start index - inclusive, until this index - exclusive)
const one = oldArray.slice(0, 3); // [ 1, 2, 3 ]
const two = oldArray.slice(-3, -1); // [ 3, 4 ]
const three = oldArray.slice(2); // [ 3, 4, 5 ]

// combine arrays: combines arrays and returns a brand new array
const otherArray = [6, 7, 8];
const combinedArray = oldArray.concat(otherArray); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

//finding the index of certain values: return the first occurrence not all indexes
const array = [1, 2, 3, 4, 5, 2, 4];
array.indexOf(2); // 1
array.lastIndexOf(2); // 5
// starts from end to left and looks for the first occurrence
// when it can not find any match : returns -1

// find an object in array:
const objectArray = [{ name: 'omid' }, { name: 'max' }];
const findInArray = objectArray.find(
  (theCurrentItem, indexOfTheItem, fullArray) => {
    return theCurrentItem.name === 'omid';
  }
);
console.log(findInArray); // { name: 'omid' }

//for the index:
const findIndex = objectArray.findIndex(
  (theCurrentItem, indexOfTheItem, fullArray) => {
    return theCurrentItem.name === 'max';
  }
);
console.log(findIndex); // 0

//find is part of an array:
const names = ['omid', 'max'];
const result = names.includes('marry');
console.log(result); // false
