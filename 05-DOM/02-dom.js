/*
<html>
  <head>
    <title>our site</title>
  </head>
  <body>
    <h1>hello</h1>
  </body>
</html>

the browser creates a object representation of these html content as an "Element Node" :
html
head
title
body
h1

all these are connected with the node tree with their parent-child relationships

and the text inside these element nodes are the "Text Node"
even the line breaks and white spaces and the content all

|__ : 
  | -> line break
  __ -> two under score

"Text Node":
<...>
|__<...>
|____<...>our site</...>
|__</...>
|__<...>
|____<...>hello</...>
|__</....>
</...>


|__
|____
our site
|__
|__
|____
hello
|__

*/

/*
to find our element nodes in the browser console we can use the coding method by the browser

for example we select the h1 tag in the element tab in the developer tools:

<h1>hello</h1> == $0
console.dir($0); (to type in the console to select element nodes)

$0 : is the last element node selected in the element tab in the developer tools in browser
*/

// * DOM nodes are just the javaScript objects in the end

/*
Besides the below query methods, you also got these special properties on the document object to select parts of the document:

document.body => Selects the <body> element node.

document.head => Selects the <head> element node.

document.documentElement => Selects the <html> element node
*/
