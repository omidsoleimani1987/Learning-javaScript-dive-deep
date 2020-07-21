const name = (firstName = 'max') => {
  console.log(firstName);
};

name(); // output : max

name('omid'); // output : omid

/*
in two situation the javaScript will use the default value :
    passing no argument
    passing 'undefined'

in other cases it takes what we pass in the function even null or falsy values
*/

name(undefined); // output : max
name(null); // output : null
name(0); // output : 0

/*
in most programming languages we should pass the argument with the default value as last argument but in js we don't have to
but it is better to assign the argument with the default value at the end
some more type of examples:
*/
let newAge = false;
function age(givenAge = newAge || 33) {
  console.log(givenAge);
}
age(); // output : 33

//or more detailed:
let newColor = false;
function color(givenColor = newColor ? newColor : 'red') {
  console.log(givenColor);
}
color(); // output : red
newColor = 'blue';
color(); // output : blue
