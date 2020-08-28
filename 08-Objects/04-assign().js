// to create a copy of an object
const oldObject = {
  name: 'omid'
};

const newObject = Object.assign({}, oldObject);
console.log(newObject); // { name: 'omid' }

oldObject.name = 'max';

console.log(oldObject); // { name: 'max' }
console.log(newObject); // { name: 'omid' }

// still spread operator is recommended

// we can use assign method to add new property to an existing object too:
const myObject = {};
Object.assign(myObject, newObject);
console.log(myObject); // { name: 'omid' }
