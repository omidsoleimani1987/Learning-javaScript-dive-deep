// to go throw each property value pairs in objects
const ourObject = {
  name: 'omid',
  age: 33,
  sex: 'male',
};

for (const key in ourObject) {
  console.log(key);
}

console.log('-------------');

for (const newKey in ourObject) {
  // console.log(ourObject.newKey); it cause an error because there is not such a key in our object....but we should tell js to use the value stored inside this key:
  console.log(ourObject[newKey]); // like this we use the 'VALUE' of these keys not the 'VARIABLE'
}

console.log('---------///---------');

console.log(ourObject.name); // normal way
console.log(ourObject['name']); // it works too, we should add an string in the brackets
//or:
const stringHolder = 'name';
console.log(ourObject[stringHolder]); // using the variable that contains the string of the key inside it

console.log('---------/////////////---------');

///to see the both property and value pairs
for (const myKey in ourObject) {
  console.log(`${myKey} => ${ourObject[myKey]}`);
}

console.log('----------------');

for (const myKey in {
  car: 'BMW-M4',
  model: '2020',
  color: 'of course black!',
}) {
  console.log(myKey);
}
