/*
undefined (it is a data type):
    - it's a default data type that a uninitialized variable has
    - we do not assign it to a variable on our own
*/
let variableOne; // data type = undefined
let variableOne = 'omid'; // data type = string

/*
null (it is a data type):
    - it is not a default value 
    - we have to set a variable to null to use that
    - often used to clear or reset a value(variable)
    - or to check if a variable is set or not
*/
variableOne = null; // reset and clear this variable

/*
NaN (it is NOT a data type):
    - it is like an error code or result 
    - it is usually a result of invalid calculation
*/
let variableTwo = 3 * 'hello'; // the result is NaN
