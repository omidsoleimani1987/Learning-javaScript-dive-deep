// our code
console.log(userName);
var userName = 'max';

// output : undefined

// browser behavior behind the scene:
var userName;
console.log(userName);
userName = 'max';

/*
we do not get an error just undefined 
the same behavior happens with the calling a function and then defining it

hoisting:
the browser goes over the entire script first and looks for things like function and automatically loads and registers them 

but the code at the top of the page with the let and const we get an error

it's good to know but not recommended to use
*/
