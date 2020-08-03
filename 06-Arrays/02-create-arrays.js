// ways to create arrays :

// best ways:

const one = [1, 2, 3];

//*) this way creates an array of iterables and like-arrays, it takes the iterables as parameter like NodeList or strings
const newArray = Array.from();

// three other ways, not used :

const two = new Array(); // it is equal to []
const three = new Array('hi', 'hello'); // [ 'hi', 'hello' ]

const four = Array(52, 23); // [ 52, 23 ]

const five = Array.of(12, 'hello'); // [ 12, 'hello' ]
