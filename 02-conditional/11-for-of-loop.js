// like foreach in php

const ourArray = ['one', 'two', 'three'];
for (let i = 0; i < ourArray.length; i++) {
  console.log(ourArray[i]);
}

// or (better way)

for (const i of ourArray) {
  console.log(i);
}

// we can also use like this:
for (const z of ['red', 'blue', 'green']) {
  console.log(z);
}
