// objects are the instance of the classes - based on classes

// syntax

// name start capital and every word capital
// fields in classes are properties in objects

class MyClass {
  // fields :
  title = 'hello world';
  name = 'omid';
  // using ( = and ; ) instead of ( : and , )
}

const myObject = new MyClass();
console.dir(myObject); // MyClass { title: 'hello world', name: 'omid' }

// one point about fields:
// we don't have to define fields first and then specify value to them with the constructor, we can create and assign value to them at the same time

class MyClass2 {
  constructor(userInput) {
    this.title = userInput;
  }
}

// usually used in constructor function

// methods:
// without : or = or function word or arrows
class MyClass3 {
  someMethod() {
    // do something
  }
}
