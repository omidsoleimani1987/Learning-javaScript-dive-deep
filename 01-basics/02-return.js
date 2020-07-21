// return statement ends the function execution, no code after return will be executed
// using just the return word alone is used to exit from function

function example() {
  const omid = 12;
  return omid;
  alert('I will not be executed'); //it does nothing
}

function exit() {
  return;
}

/*
  totally return can return a thing and then leave the function or just by giving the return it comes out of the function

  we can have it with the if statement inside the function:
*/

function getResult() {
  if (a > b) {
    return a;
  }
}

// it will be treated as this (if true):
function getResult() {
  return a;
}
