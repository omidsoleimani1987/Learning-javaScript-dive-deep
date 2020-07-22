// inline styling
const div = document.querySelector('div');
div.style.backgroundColor = 'red';

/*
class styling

*) className takes one string included the name of all classes should be added
it removes the current class name string and replace it with what we give to it
like this(it has already three classes):
<div class="red-background visible container"> ... </div>
div.className = 'ourClass';
<div class="ourClass"> ... </div>

*) classList is a javaScript object not a string like className with bield in methods

! internet Explorer doesn't support

The classList property returns the class name(s) of an element, as a DOMTokenList object.

- div.classList.length   -> property
    Returns the number of classes in the list.
    This property is read-only

    
- div.classList.add('class1', 'class2', ...)

Adds one or more class names to an element. If the specified class already exist, the class will not be added


- div.classList.remove('class1', 'class2', ...)

    Removes one or more class names from an element. Note: Removing a class that does not exist, does NOT throw an error


    - div.classList.toggle('class', true|false)

    Toggles between a class name for an element.
    The first parameter removes the specified class from an element, and returns false.
    If the class does not exist, it is added to the element, and the return value is true.
    The optional second parameter is a Boolean value that forces the class to be added or removed, regardless of whether or not it already existed. 


    - div.classList.contains('class')

    Returns a Boolean value, indicating whether an element has the specified class name.
    Possible values:
        true - the element contains the specified class name
        false - the element does not contain the specified class name

    
    - div.classList.contains('class')
    
    
    - div.classList.item(index)
    
    Returns the class name with a specified index number from an element. Index starts at 0.
    Returns null if the index is out of range

*/
