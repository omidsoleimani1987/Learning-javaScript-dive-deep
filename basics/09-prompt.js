//try it with the index-prompt file in the same directory

const variable = prompt('it is a prompt', 'something here by default');
// it returns a string if we press 'ok' or add something inside the field even a number
// if we press cancel it will return 'null' with an object type for it
console.log(variable);
console.log(typeof variable);
