/*
The createTextNode() method creates a Text Node with the specified text.

Return Value:	A Text Node object with the created Text Node

Tip: Use the createElement() method to create an Element Node with the specified name.

Tip: After the Text Node is created, use the element.appendChild() or element.insertBefore() method to append it to an element.

-- document.createTextNode(text)

Creates a new Text node. This method can be used to escape HTML characters.

var para = document.createElement("P");
var t = document.createTextNode("This is a paragraph.");
para.appendChild(t);

*/
