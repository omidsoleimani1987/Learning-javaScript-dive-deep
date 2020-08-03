//?) adding data to arrays:

let myArray = ['hello', 'world'];

// push() - adds at the end - returns the length of the array after adding the new item
myArray.push('end');

// unshift() - adds at the beginning - returns the length of the array after adding the new item
myArray.unshift('start');

//?) removing data from arrays:

// pop() - remove the last element - returns the removed element
myArray.pop();

// shift() - remove the first element - returns the removed element
myArray.shift();

// replace index:
myArray[2] = 'new item';

// add between:
myArray = ['hello', 'world'];
myArray.splice(1, 0, 'to the'); // [ 'hello', 'to the', 'world' ]
/*
* splice returns the removed elements
parameters
    1: index to start putting the new item
    0: amount of indexes that we want to delete
    'to the' : new item to add
*/
myArray.splice(0, 2); // start at 0 and remove next 2 items --> [ 'world' ]
myArray.splice(0); // removes all items --> []
myArray.splice(-1, 1); // delete the last element
myArray.splice(-2, 1); // delete the item before last element
