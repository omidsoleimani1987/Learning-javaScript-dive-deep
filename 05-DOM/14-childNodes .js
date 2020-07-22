/*
The Node.childNodes read-only property returns a live 'NodeList' of child nodes of the given element where the first child node is assigned index 0.

* Notes
The items in the collection of nodes are objects, not strings. To get data from node objects, use their properties. (For example, to get the name of the first childNode: elementNodeReference.childNodes[1].nodeName.)

childNodes includes all child nodes—including non-element nodes like text and comment nodes.
Note: Whitespace inside elements is considered as text, and text is considered as nodes. Comments are also considered as nodes.

To get a collection of only elements, use ParentNode.children instead.
Tip: element.childNodes[0] will produce the same result as the firstChild property.

*/
