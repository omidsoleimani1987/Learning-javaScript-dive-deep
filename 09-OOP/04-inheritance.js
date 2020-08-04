/*
inheritance
class MainClass {
  ...something
}

class SubClass extends MainClass {
  ...something
}


when the main class has a constructor function and the sub class doesn't have a constructor function, be creating an object of the sub class, the constructor of the main class will be automatically called. some times it makes problem with passing the parameters into the main class constructor function.

but we both classes have constructor function, then just the constructor of the sub class will be called not the constructor for the main class.

to call the constructor of the main class from inside of the sub class we can do like this:
*/

class MainClass {
  constructor(parameter) {
    console.log('hello : ' + parameter);
  }
}

class SubClass extends MainClass {
  constructor(par) {
    super(par);
  }
}

const object = new SubClass('omid'); // 'hello : omid'

/*
*) if we have any situation that we should use this keyword inside the sub class constructor function, this line of code has to come after the super() in the constructor not before it

super syntax:

    - super(arguments); --> calls the parent constructor (only inside the constructor)
    - super.parentMethod(arguments); --> calls a parent method

*/

class MainClass2 {
  constructor() {
    console.log('I am parent class constructor');
  }
  parentMethod() {
    console.log('I am a method inside the parent class');
  }
}

class SubClass2 extends MainClass2 {
  constructor() {
    super();
  }

  childMethod() {
    super.parentMethod();
    // or like before with this keyword --> this.parentMethod();
  }
}

const object2 = new SubClass2(); // 'I am parent class constructor'
object2.childMethod(); // 'I am a method inside the parent class'

/*
todo) - overriding concept:

if in some situation we want to call a method of the sub class from inside of the main class constructor, we should do like this:

1) first we call the method from the main class constructor with this keyword
    - keep in mind :
        this key word in main class or in the sub class, always refers to the object which we created from the sub class, and because the object is created from the sub class, this keyword in main class refers to the subclass method

2) then we define a empty method in main class with exact name of the method in sub class, then with the overriding concept it replaces the method in main class with the method from sub class
*/
class Main {
  constructor(parameter) {
    this.myMethod(parameter);
  }

  myMethod() {}
}

class Sub extends Main {
  constructor(par) {
    super(par);
  }
  myMethod(param) {
    console.log('hello to you ' + param);
  }
}

const newObject = new Sub('omid'); // 'hello to you omid'
