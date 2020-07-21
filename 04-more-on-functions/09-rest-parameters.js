/*
when we want to call a function with the different amount of parameters each time or we call the function not by our own then the application will call it somewhere in the code then we can use the rest parameters

the solution is to use rest operator ...
for having the different amount of parameters we can send the parameters as an array nut this rest operator takes our parameters and turns them into an array inside the function for us
*/

const sumUp = (...params) => {
  let sum = 0; // that is important to set the sum variable's type
  for (const num of params) {
    sum += num;
  }
  console.log(sum);
};

sumUp(4);
sumUp(4, 100, 56);
sumUp(4, 3, 65, 655, 71);

// if we expect another argument or more too, the rest parameter should be always the last argument

//we can't have two rest parameters in a function

// it works with the old way of defining the functions too:
const getNames = function (...names) {
  let fullName = '';
  for (const key of names) {
    fullName += key + ' ';
  }
  console.log(`your name is: ${fullName}`);
};
getNames('Max'); //output : your name is: max
getNames('Omid', 'soleimani'); //output : your name is: omid soleimani
getNames('Jean', 'Claude', 'Van', 'Damme'); //output : your name is: Jean Claude Van Damme

/*
before ES6:
we are not allowed to use arrow function for this method
key word : arguments
recommended : new method in ES6
*/
const subtraction = function () {
  let sum = 0;
  for (const num of arguments) {
    sum -= num;
  }
  console.log(sum);
};

subtraction(100, 54, 11); // output : -165
