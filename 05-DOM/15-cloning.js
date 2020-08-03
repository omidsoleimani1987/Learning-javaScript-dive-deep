/*
*) Node.cloneNode()
    The Node.cloneNode() method returns a duplicate of the node on which this method was called.

    let newClone = node.cloneNode([deep])

    node
        The node to be cloned.
    newClone
        The new node, cloned from node.

    The newClone has no parent and is not part of the document, until it is added to another node that is part of the document (using Node.appendChild() or a similar method). 

    deep (Optional)
        If true, then node and its whole subtree—including text that may be in child Text nodes—is also copied.

        If false, only node will be cloned. Any text that node contains is not cloned, either (since text is contained by one or more child Text nodes).

        deep has no effect on empty elements (such as the <img> and <input> elements).
*/
