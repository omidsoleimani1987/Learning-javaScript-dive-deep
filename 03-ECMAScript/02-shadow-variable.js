// shadow variable:
let name = 'max';
console.log('variable-name in global scope is: ' + name);

function greet() {
  let name = 'omid'; // with the same name but different scope (it shadows the outside variable)
  console.log('variable-name in function scope is: ' + name);
}

greet();
