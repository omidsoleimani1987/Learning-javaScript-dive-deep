/*

*) removeChild()
    The Node.removeChild() method removes a child node from the DOM and returns the removed node.
    todo) good browser support

    var oldChild = node.removeChild(child);
    - OR
    node.removeChild(child);

    -- child is the child node to be removed from the DOM.
    -- node is the parent node of child.
    -- oldChild holds a reference to the removed child node, i.e., oldChild === child.

    ?) The removed child node still exists in memory, but is no longer part of the DOM. With the first syntax form shown, you may reuse the removed node later in your code, via the oldChild object reference.

    let parent = document.getElementById("top");
    let nested = document.getElementById("nested");
    let throwawayNode = parent.removeChild(nested);


*) remove()
    The ChildNode.remove() method removes the object from the tree it belongs to.
    ! internet explorer
    
    node.remove();


*/
