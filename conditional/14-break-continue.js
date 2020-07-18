// break: to stop and leave loop execution
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // if condition will output the break in the for loop
  }
  console.log(i);
}
// output : 0, 1, 2

// continue : skip to the next execution
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // if condition will output the continue in the for loop
  }
  console.log(i);
}
// output : 0, 1, 2, 4
