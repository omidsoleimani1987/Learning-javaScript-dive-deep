function sayHi() {
  console.log('Hello there');
}

console.log(typeof sayHi);

/*
this --> console.log(typeof sayHi());
    will cause an error ... here it tries to get the type of what the function returns

    but in this cases (like add event listener) we should pass the name of the function

    because writing the name of the function with parentheses will execute(call the function) the function wherever it is


*/
