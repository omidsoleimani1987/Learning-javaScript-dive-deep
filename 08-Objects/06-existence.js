//when we try to reach a property that doesn't exist we get 'undefined'

// to check the existence of a property in an object:
const person = {
  name: 'omid'
};

// one old way:
if (person.age === undefined) {
  console.log('age property does NOT exist');
} // output : age property does NOT exist

// new way:
if ('age' in person) {
  console.log('property exists');
}

//or

if (!('age' in person)) {
  console.log('property does NOT exist');
} // output : property does NOT exist
