// to change strings into arrays :

// split() :
const myString = 'new york;10.99;2000;hello';
const one = myString.split(); // [ 'new york;10.99;2000;hello' ]
const two = myString.split(';'); // [ 'new york', '10.99', '2000', 'hello' ]

// join() :
const myArray = ['omid', 'soleimani'];
const three = myArray.join(); // omid,soleimani (string)
const four = myArray.join(' '); // omid soleimani (string)
