/*
----- DOM :
    Document Object Model
    is the object representation of the rendered HTML which browser creates behind the scene


a global object created and provided by the browser to give the javaScript the access to use its methods(by provided web APIs which browser provides) to manipulate the loaded HTML

----- window :
    the document in the word DOM is a property of the global window object


1) document object --> root DOM node
    top most entry point to get access to loaded HTML code
    
2) window object --> top most global object
    reflex the active browser window(tab)

*/

console.dir(document); // in browser console

/*
in browser console type : window
it gives you access to all core APIs that the browser expose you
for example alert();
just by typing in the main script actually we are accessing the method and properties from the window
that works too : window.alert();

we can find document in the window properties when we look for it
it is like this: window.document

every time we use a property or method without mentioning the object, the browser automatically looks for them in window object, like these cases:
alert(); --> window.alert();
or document.getElementById(0); --> window.document.getElementById(0);

there some events in the window object too



window object has only access to the current tab not all the tabs, and some common functionality of the browser window
*/
