// used to target any loop (we can assign it to any expression but it make scenes just with loops)

// we can use it with inner loop or anywhere in our script or even with a button with the click event

// we can use it with break or continue as well

firstLoop: for (let i = 0; i < 10; i++) {
  console.log(i);
}

function myFunction() {
  break firstLoop;
  // continue firstLoop;
}

btn.addEventListener('click', myFunction);

// or with another loop:

secondLoop: for (let i = 0; i < 10; i++) {
  console.log('outer loop i = ' + i);
  for (let j = 0; j < 10; j++) {
    if (j === 5) {
      break secondLoop; // breaks the outer loop (breaks the inner loop too, see output down)
    }
    console.log('inner loop j = ' + j);
  }
}
/*
-- output : 

    outer loop i = 0
        inner loop j = 0
        inner loop j = 1
        inner loop j = 2
        inner loop j = 3
        inner loop j = 4   --> breaks the inner loop too
*/
