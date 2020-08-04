/*
"this" - Summary

this refers to different things, depending on where it's used and how (if used in a function) a function is called.

Generally, this refers to the "thing" which called a function (if used inside of a function). That can be the global context, an object or some bound data/ object (e.g. when the browser binds this to the button that triggered a click event).

*1) this in Global Context (i.e. outside of any function)

    console.log(this); --> logs global object (window in browser) - ALWAYS (also in strict mode)!

*2) this in a Function (non-Arrow) - Called in the global context

    function something() { 
        console.log(this);
    }
 
    something(); // logs global object (window in browser) in non-strict mode, undefined in strict mode

*3) this in an Arrow-Function - Called in the global context

    const something = () => { 
        console.log(this);
    }
 
    something(); // logs global object (window in browser) - ALWAYS (also in strict mode)!

*4) this in a Method (non-Arrow) - Called on an object

    const person = { 
        name: 'Max',
        greet: function() { // or use method shorthand: greet() { ... }
            console.log(this.name);
        }
    };
 
    person.greet(); // logs 'Max', "this" refers to the person object

*5) this in a Method (Arrow Function) - Called on an object

    const person = { 
        name: 'Max',
        greet: () => {
            console.log(this.name);
        }
    };
    
    person.greet(); // logs nothing (or some global name on window object), "this" refers to global (window) object, even in strict mode
*/

/*
for example we have this buttons in our html code

<button id="btn1">first</button>
<button id="btn2">second</button>
<button id="btn3">third</button>
<button id="btn4">four</button>

*/

// when we use this keyword in a method from an object
// it does NOT refer to the object surround it , but to the thing that calls this method

console.log(this); // Window {parent: Window, opener: null, top: Window, …}

const myFunction = function () {
  console.log(this);
};

myFunction(); // Window {parent: Window, opener: null, top: Window, …}

// it refers to the window object because the window object is responsible to call this function

const anotherFunction = () => {
  console.log(this);
};

anotherFunction(); // Window {parent: Window, opener: null, top: Window, …}

// in objects:

const person = {
  greet: function () {
    console.log(this);
  }
};

person.greet(); // Object: greet: ƒ ()

// it shows the person object because behind the greet function we used the object person, actually person object is responsible to call the function(method)

// or the same:

const personTwo = {
  greet() {
    console.log(this);
  }
};

personTwo.greet(); // Object: greet: ƒ ()

//!) but look this:

const personThree = {
  greet: () => {
    console.log(this);
  }
};

personThree.greet(); // Window {parent: Window, opener: null, top: Window, …}

//todo) we come back to this later...just keep in mind arrow functions behave different

/**************************************************************************************************************************/

//*) event handler callback functions

// in this cases neither the window object nor the object itself is the responsible to call the function:

const myButton1 = document.getElementById('btn1');
const functionHandler1 = function () {
  console.log(this);
};
myButton1.addEventListener('click', functionHandler1);

// by clicking the first button, the result of this keyword is : <button id="btn">first</button>
// because the in event handler situations , the element to which is the event connected, is responsible to call the function, then the this keyword refers to the element

//

const myButton2 = document.getElementById('btn2');
const functionHandler2 = () => {
  console.log(this);
};
myButton2.addEventListener('click', functionHandler2);

// by clicking the second button, the result of this keyword is : Window {parent: Window, opener: null, top: Window, …}

//!) arrow functions behave different in this case too

/**************************************************************************************************************************/

// to solve the problem in callback functions like event handlers we can use two ways:

// first way --> to use bind()

const myButton3 = document.getElementById('btn3');

const mainObject = {
  name: 'omid',
  greet() {
    console.log(this);
    console.log(this.name);
  }
};

// buy pulling out the function and call it by our self:

let { greet: PulledFunction } = mainObject;
PulledFunction(); // Window {parent: Window, opener: null, top: Window, …}

//!) PulledFunction.bind(mainObject); --> will not work because with bind we have to call the function by our self again
PulledFunction = PulledFunction.bind(mainObject);
PulledFunction();

// console.log(this) --> result : mainObject {name: "omid", greet: ƒ}
// console.log(this.name) --> result : omid

/*
*) another situation is that another object or thing calls our method

myButton3.addEventListener('click', mainObject.greet);

in this case, the result is : <button id="btn3">third</button>

!) it still refers to the element

but to fix it we can make this refer to the object with binding it to the object
*/

myButton3.addEventListener('click', mainObject.greet.bind(mainObject));
// console.log(this) --> result : mainObject {name: "omid", greet: ƒ}
// console.log(this.name) --> result : omid

/*
?) second way --> to use call() and apply()

it is the same just call and apply gives us the option to pass parameters into the callback function in different ways
  
  - call() :
      anyFunction.call(object, , , , , );

  - apply() :
      anyFunction.apply(object, [ , , , ] );


!) the main difference between call and apply with bind is:
    - bind prepares the function for future execution , therefore we have to call it by our self after
    - call and apply the refer the function or method to what we want and then execute it at the same time

like this :
*/

let { greet: PulledFunction2 } = mainObject;
PulledFunction2.call(mainObject);
// console.log(this) --> result : mainObject {name: "omid", greet: ƒ}
// console.log(this.name) --> result : omid

// and with the event listener:

const myButton4 = document.getElementById('btn4');

const mainObject4 = {
  name: 'Max',
  greet() {
    console.log(this.name);
  }
};
myButton4.addEventListener('click', mainObject4.greet.call(mainObject4));

// in this scenario, with call() and event listener, functionality is not what we want, because with out even clicking the button, call() method execute the callback function in event listener immediately and this is not what we use in event listeners

/*

this can refer to unexpected things if you call it on some other object, e.g.:

const person = { 
    name: 'Max',
    greet() {
        console.log(this.name);
    }
};
 
const anotherPerson = { name: 'Manuel' };
  does NOT have a built-in greet method!
 
anotherPerson.sayHi = person.greet;
  greet is NOT called here, it's just assigned to a new property/ method on the "anotherPerson" object
 
anotherPerson.sayHi();
  logs 'Manuel' because method is called on "anotherPerson" object => "this" refers to the "thing" which called it

If in doubt, a console.log(this); can always help you find out what this is referring to at the moment!

?) more on this keyword --> section 9 / episode 231 - 234
*/
