/*
    truthy and falsy values
        It's important to understand that JavaScript is able to use variables in conditions - even without comparison operators.
        JavaScript tries to coerce the values you pass to if to boolean values.

    if (condition) {} 

    -- numbers:
        0 -> false
        any other number, negative, float
    
    -- strings:
        '' (empty) -> false
        any other -> true


    -- objects{} and arrays[]:
        always(even empty) -> true

    -- null, undefined, NaN:
        always -> false
*/

if (NaN) {
  console.log('true');
} else {
  console.log('false');
}

/*
    let variable = true;
    !variable -> false
*/
