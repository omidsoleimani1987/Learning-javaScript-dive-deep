class MyClass {
  name = 'omid';
}

const myObject = new MyClass();

console.log(typeof myObject); // object
console.log(myObject instanceof MyClass); // true

// more example:

btn = document.getElementById('btn');
btn instanceof HTMLButtonElement; // true

// we know -> HTMLButtonElement class extends HTMLElement class
btn instanceof HTMLElement; // true
