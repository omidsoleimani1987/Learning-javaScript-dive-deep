// it is for the functions which will be called for us not by ourself but by the for example build in functions or another functions

// call back functions are usually the functions which we pass them as the parameter into another functions
let btn;
btn.addEventListener('click', foo);
// foo is a callback function

//or

const showName = (par) => {
  console.log(`your name is : ${par}`);
};

const sayHi = (showName, name) => {
  showName(name);
};

// showName is a callback function
sayHi(showName, 'omid');
