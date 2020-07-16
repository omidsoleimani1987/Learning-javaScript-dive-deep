/*
-- convert a truthy and falsy values to real boolean:
!! (double bang)
for example:
    '' -> falsy interpretation
    !'' -> real true boolean
    !!'' -> real false boolean instead of falsy

    or

    1 -> truthy
    !!1 -> real true boolean
*/
const userInput = ''; /// falsy

// longer way
const isValidInput1 = userInput ? true : false;
console.log(isValidInput1); /// output : false

// shorter way
const isValidInput2 = !!userInput;
console.log(isValidInput2); /// output : false

/*
-- assign a default value via OR operator:
||

const name = someInput || 'omid';

if someInput is truthy it assign the name variable to the someInput otherwise it takes the 'omid' which is a truthy value and give it to the variable

|| and && they don't generate a boolean, they return true or false but not because they create true or false 

*/
const input = '';
const userName = input || 'omid';
console.log(userName); /// output : omid

const realInput = 'max';
const newName = realInput || 'david';
console.log(newName); /// output : max

/*
-- use value if condition is true:
&&

if:
    first value = true  -->  returns the second value
    first value = false(falsy)  -->  returns the first value
*/

let isLoggedIn = true;
const shoppingCard1 = isLoggedIn && ['books', 'papers'];
console.log(shoppingCard1); /// output : ['books', 'papers']

// it checks if isLoggedIn is true then returns the second value which is the array, but when the first value is not true then it returns the first value

isLoggedIn = false;
const shoppingCard2 = isLoggedIn && ['appels', 'bananas'];
console.log(shoppingCard2); /// output : false

let situation1 = null;
const shoppingCard3 = situation1 && ['windows', 'linux'];
console.log(shoppingCard3); /// output : null

let situation2 = true;
const shoppingCard4 = situation2 && '';
console.log(
  'you can not see empty string in console but it is there' + shoppingCard4
); /// output : ''

let situation3 = false;
const shoppingCard5 = situation3 && '';
console.log(shoppingCard5); /// output : false
