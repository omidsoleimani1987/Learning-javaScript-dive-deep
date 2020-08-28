// arrow functions can be used for the anonymous functions
const foo = function () {
  console.log('hello');
};

const foo = () => {
  console.log('hello');
};

/*
general syntax:

-- no arguments no parameters : empty pairs of parentheses are required
    () => {...} 
      const greet = () => {
        console.log('Hi there!');
      };

-- one argument / parameter : parentheses can be omitted
    arg => {...}  or (arg) => {...}
      const log = message => {
        console.log(message);
      };

-- exactly one expression in function body :
    curly braces can be omitted, the result is "returned"
    (a, b) => a + b
      const add = (a, b) => a + b;

-- more than one expression in function body :
    curly braces and return is required
    (a, b) => {
        a*=2;
        return a + b;
    }
*/

const add1 = function (a, b) {
  return a + b;
};

const add2 = (a, b) => a + b;

///as we know it used for anonymous functions
button.addEventListener('click', () => {
  console.log('clicked!');
});

/*
one more use case

Function returns an object:

const person = function () {
  return {name: 'omid'};
}

const person = () => ({name: 'omid' });

Extra parentheses are required around the object, since the curly braces would otherwise be interpreted as the function body delimiters

That last case can be confusing: Normally, in JavaScript, curly braces always can have exactly one meaning.
  const person = { name: 'Max' };    // Clearly creates an object
  if (something) { ... }             // Clearly used to mark the if statement block


But when using arrow functions, curly braces can have two meanings:

1) Mark the function body (in default form)

2) Create an object which you want to return (in shorter function body form)

To "tell" JavaScript what you want to do, wrap the expression (e.g. object creation) in parentheses like shown above.

*/
