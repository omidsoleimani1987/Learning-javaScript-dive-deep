const ourFunctionHandler = function (event) {
  console.log(event);
};

// or

const ourFunctionHandler = function (eve) {
  console.log(eve);
};

// or

const ourFunctionHandler = function (e) {
  console.log(e);
};

btn.addEventListener('click', (e) => {
  console.log(e.target);
});

// HTML DOM Event Properties and Methods:
// https://www.w3schools.com/jsref/dom_obj_event.asp
