/*
we can export a thing from a file without giving a name to it, like exporting a class from a file like this without name:
    export default class {
        ...
    }

but by importing it we should specify a new name for it and we do not use curly brackets for it, like this:
    import myName from 'someFile.js'

javaScript recognize that this imported thing is the default exported thing from other file

-------

we can have default export from a file and normal export from the same file, like this:
    export default something here
    export function myFunction() {...}

by importing, default export without curly brackets and the normal export with curly brackets:
    import newName, { myFunction } from ...

*/
