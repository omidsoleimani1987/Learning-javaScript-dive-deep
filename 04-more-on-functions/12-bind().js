// The bind() function creates a new bound function, which is an exotic function object (a term from ECMAScript 2015) that wraps the original function object. Calling the bound function generally results in the execution of its wrapped function

//example 1:
const userOne = {
  firstName: 'max',
  lastName: 'muller',
};

const userTwo = {
  firstName: 'omid',
  lastName: 'soleimani',
};

const getFullName = function () {
  console.log(`you name is : ${this.firstName} ${this.lastName}`);
};

// to bind a function to object
const personOne = getFullName.bind(userOne);
personOne();

const personTwo = getFullName.bind(userTwo);
personTwo();

//example 2:
const coordinate = {
  x: 12.4574,
  y: 23.8346,
};

const getCoordinate = function () {
  console.log(`the coordinate is: (${this.x} , ${this.y})`);
};

const placeOne = getCoordinate.bind(coordinate);
placeOne();

//example 3: functions are objects and they can be treated as objects

// a use case is to give the callback functions parameter as we pass them into another function, because in normal way we can't do such a thing with parentheses

// tip : showResult is the callback function

const calculator = (showResult, operator, num1, num2) => {
  let final = 0;
  if (operator === 'add') {
    final = num1 + num2;
  } else if (operator === 'sub') {
    final = num1 - num2;
  } else if (operator === 'mul') {
    final = num1 * num2;
  } else if (operator === 'div') {
    final = num1 / num2;
  }
  showResult(final); // notice that it needs two parameters
};

const showResult = (message, result) => {
  console.log(`${message} : ${result}`);
};

//what we bind is the first argument because it happens first then in the calculator function it adds the second argument to the showResult function, so we should pay attention to the parameters order
calculator(showResult.bind(this, 'addition result is'), 'add', 24, 10);
calculator(showResult.bind(this, 'subtraction result is'), 'sub', 24, 10);
calculator(showResult.bind(this, 'multiplication result is'), 'mul', 24, 10);
calculator(showResult.bind(this, 'division result is'), 'div', 24, 10);
