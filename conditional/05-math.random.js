/*
Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
Math.random() always returns a number lower than 1.

Math.random() used with Math.floor() can be used to return random integers.
*/
Math.floor(Math.random() * 10); // returns a random integer from 0 to 9
Math.floor(Math.random() * 11); // returns a random integer from 0 to 10
Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10
Math.floor(Math.random() * 100); // returns a random integer from 0 to 99
Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100
Math.floor(Math.random() * 101); // returns a random integer from 0 to 100

// This function always returns a random number between min (included) and max (excluded):
function A(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// This function always returns a random number between min and max (both included):
function B(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
