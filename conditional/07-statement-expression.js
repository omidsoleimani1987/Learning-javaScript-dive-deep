/*
expression:
    is something that yields a 'value' you could store in a constant or variable or return in a function etc.
    An expression is any valid unit of code that resolves to a value.

    example ->
        const variable = x === y ? 'yes they are equal' : 'no they are not';
        expression : x === y ? 'yes they are equal' : 'no they are not' ---> it returns something
        statement : const variable = x === y ? 'yes they are equal' : 'no they are not';

    every expression is also a statement, but not all statements are an expression(like 'if' statement, you can use it at the other side of a equal sign) or we can think that expression can be used at the other side of the equal sign

    Expression produces or evaluates some value.
    Examples of expressions: new Date() produces new Date object without any side effect.
    [1,2,3] produces a new array without any side effect.
    5+6 produces a new value 11. It just produces new value without any side effect.

    Statement produces some behavior or does something and it has some side effect also. Based on the side effect, statements can be categorized.

    x=5; is a statement and here side effect is assignment or change in x.
    setTimeout() - start of timer is the side effect.

    Statements are generally separated by semicolon.
    Expression statement are the expression that has some side effect or simply "expression with side effect".
    Examples of expression statement:
    x+=6; is the complex expression(group of primary expressions) is doing assignment that is a side effect, so called expression statement.
    delete a[2];

    Wherever JavaScript expects a statement, you can also write an expression. Such a statement is called an expression statement. The reverse does not hold: you cannot write a statement where JavaScript expects an expression. For example, an if statement cannot become the argument of a function
    
*/
