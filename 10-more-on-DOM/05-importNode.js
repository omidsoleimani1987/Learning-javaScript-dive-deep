/*
The Document object's importNode() method creates a copy of a Node or DocumentFragment from another document, to be inserted into the current document later.

The imported node is not yet included in the document tree. To include it, you need to call an insertion method such as appendChild() or insertBefore() with a node that is currently in the document tree.

Unlike document.adoptNode(), the original node is not removed from its original document. The imported node is a clone of the original.

*)Note: The original node is not removed from the other document. The imported node is a copy of the original.

*)Tip: Use the document.adoptNode() method to remove and import a node from another document.

*)Tip: Use the element.cloneNode() method to copy a node from the current document.

Syntax
    const importedNode = document.importNode(externalNode [, deep]);

Parameters
    - externalNode
        The external Node or DocumentFragment to import into the current document.

    - deep Optional
        A Boolean which controls whether to include the entire DOM subtree of the externalNode in the import.
            If deep is set to true, then externalNode and all of its descendants are copied.
            If deep is set to false, then only externalNode is imported — the new node has no children.
*/
const iframe = document.querySelector('iframe');
const oldNode = iframe.contentWindow.document.getElementById('targetNode');
const newNode = document.importNode(oldNode, true);
document.getElementById('container').appendChild(newNode);
