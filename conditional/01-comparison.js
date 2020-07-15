const person1 = { name: 'max' };
const person2 = { name: 'max' };

if (person1 == person2) {
  console.log('yes they are equal');
} else {
  console.log('no they are not');
}

if (person1 === person2) {
  console.log('yes they are equal');
} else {
  console.log('also, no they are not');
}

// objects don't behave like other types

// but:

const person3 = person1;
if (person3 === person1) {
  console.log('------yes in this case they are equal');
} else {
  console.log('also, no they are not');
}

// or:

if (person1.name === person2.name) {
  console.log('------values are equal');
} else {
  console.log('also, no they are not');
}

// arrays behave the same

const hobby1 = ['film'];
const hobby2 = ['film'];
if (hobby1 === hobby2) {
  console.log('yes these arrays are equal');
} else {
  console.log('arrays are not equal too');
}
