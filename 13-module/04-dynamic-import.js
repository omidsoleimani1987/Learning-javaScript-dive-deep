/*
with importing file with static import module, each of our import is a http request

it can be used for something like tooltip, as long as our user doesn't do some special thing with the mouse with some specific element , we don't have to import the functionality before, just when it is needed then we import it, maybe user doesn't do this special behavior!

we can do something else , that the file be imported or better the http request being sent just when it get used by some function , not at the beginning of loading our page

we can use a special syntax:

some where in our code that we need some thing like a function from another file we can ignore importing the thing at the beginning of our script and importing it when it is used in our code:

    import('./sample/scripts/firstFile.js').then(module => {
        -- we use it like this:
        module.someFunction() ...
        -- here we can write our code that uses this thing from another file
    });

*/
