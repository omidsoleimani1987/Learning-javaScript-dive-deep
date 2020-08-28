// https://www.w3schools.com/js/js_regexp.asp
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp

const userEmail = 'omid@test.com';

// there is two ways:

// const regex = new RegExp( -- here comes the pattern -- );

// or:

const emailPattern = /^\S+@\S+.\S+$/; // this is an object and we can call a method on it

console.log(emailPattern.test(userEmail)); // true

/*
explanation:

at the beginning --> ^

we have to start in any kind of word -->  \S+

some where in overall the string I want to have the @ symbol --> @

there after again any kind of word --> \S+

then a dot --> \.

then any kind of word which we end the screen --> \S+

the last word should be at the end --> $

*/

/****************************************************************************************************************/

// complete explanation:

const text1 = 'hello there';
const text2 = 'omid soleimani';

const regex1 = new RegExp('ll'); // case sensitive
// or:
const regex2 = /ll/;

console.log(regex1.test(text1)); // true
console.log(regex2.test(text1)); // true

console.log(regex1.test(text2)); // false

// another method:

console.log(regex1.exec(text1));
/*
output: 

    ["ll", index: 2, input: "hello there", groups: undefined]
        0: "ll"
        groups: undefined
        index: 2
        input: "hello there"
        length: 1
        __proto__: Array(0)
*/
console.log(regex1.exec(text2)); // null

// reverse the exec with match:

console.log(text1.match(regex1)); // same result : [ 'll', index: 2, input: 'hello there', groups: undefined ]

// use search() method to get the index :
console.log(text1.search(regex1)); // 2

/*************************************************************************************************************/

// ignoring the case sensitivity :

const reg = /(o|O)mid/;
console.log(reg.test('omid')); // true
console.log(reg.test('Omid')); // true
console.log(reg.test('Omi')); // false

//
console.log('****************************************');
//

// starting letter doesn't matter but it has to be 'AT LEAST' 4 letters and end with 'mid' :
const reg2 = /.mid/;
console.log(reg2.test('omid')); // true
console.log(reg2.test('oMid')); // false
console.log(reg2.test('mid')); // false
console.log(reg2.test('smid')); // true
console.log(reg2.test('2mid')); // true
console.log(reg2.test('ooooomid')); // true
console.log(reg2.test('      mid')); // true

/*
to ignore the behavior of the dot we can use the back slash to define the dot in regular expression as a character (because dot has already a predefined meaning ):

\.

we can scape anything with back slash , like this : \S+
by \S we don't mean capital s character but we mean any word because it defined like this

*) better way is to look for the regexp in web for better solutions

*/
