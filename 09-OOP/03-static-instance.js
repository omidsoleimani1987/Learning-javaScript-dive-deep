// property , fields and methods

// what we did sofar was instance

// but static :

class MyClass {
  static name = 'manuel';
  static sayHi() {
    console.log('hello there');
  }
}

// without creating an object ->

console.log(MyClass.name); // 'manuel'
MyClass.sayHi(); // 'hello there'

//*) good practice:

// if our static method creates a field, which we want to have it as a static field, it is good practice to create this field first as a static and then letting the static property to assign value to it

class MyClass2 {
  static title;
  static myMethod() {
    this.title = 'omid';
  }
}

MyClass2.myMethod(); // first giving a value to it

console.log(MyClass2.title); // 'omid'
