class MyClass {
  // with or without defining the field first
  constructor(ourTitle) {
    this.title = ourTitle;
  }
}

// we can have our objects for example in an array without creating an object of them:

const myArray = [new MyClass('hello'), new MyClass('world')];

console.log(myArray); // [ MyClass { title: 'hello' }, MyClass { title: 'world' } ]
