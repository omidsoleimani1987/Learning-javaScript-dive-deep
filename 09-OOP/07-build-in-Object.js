// build-in Object in javaScript

const myObject = new Object();
console.log(myObject); // {}

// like:
const myObject2 = {};

// we hade before:
const myArray = new Array();
console.log(myArray); // []

//*) Descriptors
// there is a descriptor for any property and method inside the object

const myObject3 = {
  name: 'omid',
  age: 33
};

Object.getOwnPropertyDescriptors(myObject3); // {name: {…}, age: {…}}
/*
output for name for example:
    name:
        configurable: true --> that to be able to delete the property later
        enumerable: true --> that the property be counted into something like for of loop
        value: "omid" --> to change it here
        writable: true --> to be able to change the value later
*/

// to configure the descriptors:

Object.defineProperty(myObject3, 'age', {
  configurable: false,
  enumerable: false,
  writable: false,
  value: 40
});

console.log(myObject3); // {name: "omid", age: 40}

myObject3.age = 50;
console.log(myObject3); // {name: "omid", age: 40}
// point : we don't get an error, it just had been ignored
