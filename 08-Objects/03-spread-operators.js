// spread operator clones a copy of the object into a variable:
const newObj = { ...oldObj };

// we know it already

// but if inside the old object there is another type of objects like an array, then the spread operator just copy the reference not the object itself. any changes to the old object(array) will appear in the new object to because it just holds the reference

// keep in mind!

// one not real solution:
//! only our object in the old object , in this case the array, doesn't contain any object inside it
const personOne = {
  name: 'omid',
  age: 33,
  hobbies: ['coding', 'films']
};

const personTwo = { ...personOne, hobbies: [...personOne.hobbies] };
// we overwrite the hobbies in new object with the self made copy of the object inside the old object, everything else stays the same with the spread operator,
