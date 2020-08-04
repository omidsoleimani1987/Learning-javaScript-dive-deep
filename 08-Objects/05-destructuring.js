// object destructuring:

// used to pull out the property and methods out of an object and assign them to variables

// we have to put the exact key name of the property
const object = {
  name: 'omid',
  age: 33,
  info: {
    skill: 'coding',
    hobby: 'nothing'
  },
  greet() {
    console.log('hello');
  }
};

// destructuring the properties

const { age } = object;
console.log(age); // 33
console.log(typeof age); // number

const { info } = object;
console.log(info); // { skill: 'coding', hobby: 'nothing' }
console.log(typeof info); // object

//*) we can stor the rest like this:
const { name, ...theRest } = object;
console.log(name); // 'omid'
console.log(theRest); // { age: 33, info: { skill: 'coding', hobby: 'nothing' } }

//todo) we can store them in new variables with new names:
const { info: details } = object;
console.log(details); // { skill: 'coding', hobby: 'nothing' }

// we can destruct the methods too:
const { greet: myFunction } = object;
// to use the destructed method we should use parentheses
myFunction(); // hello
