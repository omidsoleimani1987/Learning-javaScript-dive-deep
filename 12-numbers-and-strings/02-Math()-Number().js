// infinity:
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
// also we can:
console.log(Infinity); // Infinity ... like Number.POSITIVE_INFINITY

let x = 12;
console.log(Number.isFinite(x)); // true
let y = 1 / 0;
console.log(Number.isFinite(y)); // false
console.log(Number.isFinite(y)); // false
console.log(Number.isFinite(Infinity)); // false

/*************************************************************************************************************/

console.log(Math.E); // 2.718281828459045
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-5)); // 5

// generate random number between min and max:
const myRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(myRandomNumber(25, 43)); // try it!
