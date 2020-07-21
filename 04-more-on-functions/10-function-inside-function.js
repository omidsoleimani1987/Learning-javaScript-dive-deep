const sumUp = (...params) => {
  const validate = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of params) {
    sum += validate(num);
  }
  console.log(sum);
};

sumUp(10, 20); // output: 30
sumUp(10, 'max', 20); // output: 30
