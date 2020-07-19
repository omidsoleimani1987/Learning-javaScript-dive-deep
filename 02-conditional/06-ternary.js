// the purpose is that if statement doesn't return anything
// to assigning a VALUE from a function to a variable we can use these two ways:

// on way:

const firstVariable;
if (x === y) {
    firstVariable = 'something';
} else {
    firstVariable = 'another thing';
}

// or :

const secondVariable = x === y ? 'something' : 'another thing';

// for nesting the conditions: (not recommended - leads to hard to read code)

const thirdVariable;
if (x === y) {
    if (a === b) {
        thirdVariable = 'first situation';
    } else {
        thirdVariable = 'second situation';
    }
} else {
    thirdVariable = 'another thing';
}

const thirdVariable = x === y ? a === b ? 'first situation' : 'second situation' : 'another thing';