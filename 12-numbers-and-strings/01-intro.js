// all numbers in jd are float, like -5 -> -5.0 or 12 -> 12.0
// js has no integer number
// 64 bits are available to represent a number

/**************************************************************************************/

// biggest possible integer number
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
/// equal to :
const num1 = Math.pow(2, 53) - 1; // (2 power to 53) - 1
console.log(num1); // 9007199254740991

// min safe integer
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// to have numbers larger than this we can use BigInt()
// A BigInt is created by appending n to the end of an integer literal — 10n — or by calling the function BigInt().
const alsoHuge = BigInt(9007199254740991);
console.log(alsoHuge); // 9007199254740991n

// biggest value:
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

/**************************************************************************************/

let z = 0.2 + 0.4;
console.log(z); // 0.6000000000000001;
// or
0.2 + 0.4 === 0.6 ? console.log('equal') : console.log('not equal'); // not equal
// that happens because of the difference between the decimal system and the binary system

// to avoid this we can use toFixed method to define the number of decimals:
console.log((0.2 + 0.4).toFixed(2)); // 0.60
console.log((0.2 + 0.4).toFixed(1)); // 0.6
console.log((0.2 + 0.4).toFixed(0)); // 1

console.log((5.4001).toFixed(0)); // 5
console.log((5.5001).toFixed(0)); // 6
console.log((5.5).toFixed(0)); // 6

/**************************************************************************************/

//TODO)    look at some more number methods
//*)       https://www.w3schools.com/js/js_number_methods.asp

/**************************************************************************************/
