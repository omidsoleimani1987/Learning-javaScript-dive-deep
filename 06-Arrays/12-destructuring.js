// array destructuring:
const array = ['omid', 'soleimani', 'male', 33];
const [firstName, lastName] = array;

console.log(firstName); // omid
console.log(lastName); // soleimani

// or:

const [FirstName, ...otherInfos] = array;
console.log(FirstName); // omid
console.log(otherInfos); // [ 'soleimani', 'male', 33 ]
