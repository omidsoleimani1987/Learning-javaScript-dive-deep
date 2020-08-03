/*
spread operator:
this method takes out the arrays elements and gives them back to us as separated values
then we can do some operation on them
*/

// we can make a copy of an array:
const oldArray = [1, 2, 3];
const newArray = [...oldArray]; // [ 1, 2, 3 ]

//it is not a reference address that by changing the old array , the new array stays intact
oldArray.push(4);
console.log(oldArray, newArray); // [ 1, 2, 3, 4 ] , [ 1, 2, 3 ]

// usage as a separated values:
//! we can NOT : Math.min(oldArray);
//* but we can :
Math.min(...oldArray); // 1

//todo) if our array contains objects and we try to copy old array to new array this method we should be careful, because with the objects it creates just the reference address to the new array, any changes to the old array will appear in the new array too *****  be aware of this point  ***** just like the slice method , it still doesn't make a copy of the objects it just copy the reference
