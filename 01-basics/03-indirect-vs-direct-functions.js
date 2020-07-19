/*
when we want to referencing a function in another function we shouldn't use parentheses, because by using parentheses the browser will execute the function instead to reference to it

with parentheses :
JavaScript would encounter that line when it parses/ executes your script and register the event listener AND immediately execute add - because you added parentheses => That means: "Please execute that function!".
*/
const button;
function addTitle() {
    // do something here
}

button.addEventListener('click', addTitle); // without parentheses