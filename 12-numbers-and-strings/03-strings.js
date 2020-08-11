/*
more on string methods :
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    https://www.w3schools.com/js/js_string_methods.asp

*) working with template literals :

`my name is ${--- any valid javaScript expression---}`

to generate fully dynamic string (or any thing for example an object) with the help of our parameters passed to the function, we can use the "Tagged templates"
*/

function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);

  let priceCategory = 'pretty cheap regarding its price';

  if (productPrice > 20) {
    priceCategory = 'fairly priced';
  }

  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;

  // return { name: productName, price: productPrice };
}

const prodName = 'JavaScript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);

//!      O_o
