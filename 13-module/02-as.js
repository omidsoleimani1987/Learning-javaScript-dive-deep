/*
*) we have to be more specific to what we are importing, for more import we can separate them with comma
    import { firstFunction, anotherFunction } from './firstFile.js';
but if we want to access all the exported function and maybe objects from file, and we do not want to specify all one by one in curly brackets, then we can use asterisk symbol and then give them a new name by our choice which seems as an OBJECT that with dot notation we can access them all, like this:
    import * as myName from './firstFile.js';
    then:
    myName.firstFunction ...
this 'as' can use in normal cases too to assign new names:
    import { firstFunction as myNewName } from './firstFile.js';
*/
