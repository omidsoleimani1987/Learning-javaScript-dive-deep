// function declaration / function statement:
function sayHi() {
  console.log('hello there');
}

sayHi();

// function expression:

const bye = function sayBye() {
  console.log('bye bye');
};
//button.addEventListener('click', bye);

// so we can use the function as anonymous function because it is stored with the name of variable therefore it doesn't need another name for itself

const foo = function () {
  console.log("I'm foo");
};

// notice that this is wrong : foo;  (must be with parentheses)
foo();

// or:

const bye2 = function (a, b) {
  console.log(a * b);
};

bye2(5, 2);

// in the case od using the function as an expression we can NOT use function before declaring it, but with function as statements we can use them before declaring them
