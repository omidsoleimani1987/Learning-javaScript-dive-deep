/*
DOM nodes are the javaScript objects in the end, these methods return the object references (addresses)


querySelector(); -> by CSS selectors
getElementById(); -> by ID

- returns single element
- get access to the first matched element from the DOM
- return a live-node, add and remove them will be reflected in the returned reference

querySelectorAll();
getElementByTagName();
getElementsByClassName();

- return collection of elements (array-like objects): NodeList
- return all matched elements
* - gives you a none-live node list (snapshot of the currently rendered DOM)


Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class') and returns the first (!) matching element in the DOM. Returns null if no matching element could be found.

*/

/*
?) document.querySelectorAll(<CSS selector>);
    Takes any CSS selector (e.g. '#some-id', '.some-class' or 'div p.some-class') and returns all matching elements in the DOM as a static (non-live) NodeList. Returns and empty "NodeList" if no matching element could be found.

?) document.getElementsByClassName(<CSS CLASS>);
    Takes a CSS class g (e.g. 'some-class') and returns a live HTMLCollection of matched elements in your DOM. Returns an empty "HTMLCollection" if not matching elements were found.

?) document.getElementsByTagName(<HTML TAG>);
    Takes an HTML tag (e.g. 'p') and returns a live HTMLCollection of matched elements in your DOM. Returns an empty "HTMLCollection" if not matching elements were found.
*/
