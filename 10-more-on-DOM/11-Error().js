/*

The Error Object
JavaScript has a built in error object that provides error information when an error occurs.

The error object provides two useful properties: name and message.

const myError = new Error();

*/

const myError = new Error('this is the message for my error which I created');

// try this --> throw myError;

const mySecondError = new Error();
mySecondError.name = 'this is the name';
mySecondError.message = 'this is the message';

//we can add anything else , like:
mySecondError.myCode = 110;

console.dir(mySecondError);
/*
this is the name: this is the message
    at <anonymous>:1:23
    message: "this is the message"
    myCode: 110
    name: "this is the name"
    stack: "this is the name: this is the message↵    at <anonymous>:1:23"
    __proto__: Object
*/
