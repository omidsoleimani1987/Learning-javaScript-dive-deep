// object literal notation -> {...}

// add property to an existing object:
person.isAdmin = true; // it works for overwriting too

// delete property:
delete person.age;

// giving strange names to the objects key pair and value:
const person = {
  // wrap in ''
  'first name': 'omid',
  'first-name': 'max'
};

// to access them:
console.log(person['first name']); // 'omid'

//*) point:
const variable = 'first name';
person.variable; // won't work
person[variable]; // works

// other examples - good to know:
btn.style.backgroundColor = 'red';
btn.style['backgroundColor'] = 'red'; // we can use it for normal properties too
btn.style['background-color'] = 'red'; // using the normal css property

// numbers as key (not recommended) :
const person = {
  1.5: 'hello'
};

person[1.5];
person['1.5']; // also works

//*) when we have the key from outside the object and want to create a key from a variable for example from user input that we don't know what it is:

const userInput = 'someThing';
const myObject = {
  [userInput]: 'some info'
};
console.log(myObject[userInput]); // 'some info'

// to assign another property to object:
const userInput2 = 'my name';
myObject[userInput2] = 'omid';
console.log(myObject); // { someThing: 'some info', 'my name': 'omid' }

//?) when the key and value has the same name:
const name = 'omid';
const person = {
  // name(key what we chose): name(value which comes from a variable)
  // we can do like this :
  name
};
console.log(person); // { name: 'omid' }

// define a method in object:
const person = {
  greet: function () {
    console.log('hello');
  }
};

// this is the exact like above just a shorthand:

const person = {
  greet() {
    console.log('hello');
  }
};
