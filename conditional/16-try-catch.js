// try {...} catch (error) {...}

// throwing an error without try
const variableOne = true;
if (variableOne) {
  //do something
  // and then we can throw an error
  // this error can be anything, a number or a string or an object(usually)
  //throw { ourMessage: 'this is the message of throwing an error without try' };
}
/*
    in this situation we get an 'Uncaught' error in console with the behavior of the browser with this output:

    Uncaught {ourMessage: "this is the message of throwing an error without try"}

    but we can use the try to log our error in console by ourself without the 'Uncaught' error
    like this:
*/
try {
  // we try here what we desire
  // something that we want to happen
  // if we fail here, then throw an error:
  if (true) {
    throw { anotherMessage: 'the omid variable is not defined' };
  }
} catch (ourError) {
  // ourError object is available here
  // anotherMessage is just a property of this ourError object
  console.log(ourError);
  // and then do something else for keep the script go
}

// output : { anotherMessage: 'the omid variable is not defined' }

/*
or we can just output the text like this:

console.log(ourError.anotherMessage);
    -- output : the omid variable is not defined
then the output is just a string

if we want to write a text in console log with the text of the error, for concatenation rules of js we should mention the object and the property together like this:
    
    ourError.anotherMessage

console.log('an example for concatenation: ' + ourError.anotherMessage);

*/

/*
finally :
the code inside the finally will always execute no matter we had an error or not
for example if we throw an error inside the catch section (re-throwing error) then we can work with that in the finally section and more situations like this

try {...} catch (error) {...} finally {...}
or
try {...} finally {...}



*/

// with try and catch, the script still runs:
console.log('the rest of the script works by the way');
