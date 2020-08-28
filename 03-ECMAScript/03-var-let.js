/*
ES5 (and older)

var => only knows 'global' scope and 'function' scope
so if we define a variable inside a if statement (which is a block scope) we can access it in the global scope, it would be treated as a global scope

a variable created (var keyword) in a function can not be used outside of it, but a variable created in global can be used everywhere

for the let and const is also like this but:
let and const work with the {} (not curly braces in object) they don't care about function just the scope of that block

*/

// sometimes to just to test a code we can shortly create a block and test our code there to have a isolated area in code

{
  let name = 'david';
  if (true) {
    // something
  }
  console.log('it works');
}

// just two curly braces nothing more
