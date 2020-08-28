// a anonymous function
button.addEventListener('click', function () {
  console.log('hello');
});

// this function will be execute when the event happens

// but

button.addEventListener(
  'click',
  (function () {
    console.log('hello');
  })()
);
//  but by adding parentheses after the function it will be execute right after reading the code from top to button by browser

// totally parentheses execute the function immediately

/*
another point:
 it is good to use a name for anonymous functions too because of debugging

 it helps to find the errors with the name which we gave to the function not by using the <anonymous> 
*/
