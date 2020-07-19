/*
global isNaN() function:

- The isNaN() function determines whether a value is an illegal number (Not-a-Number).
- This function returns true if the value equates to NaN. Otherwise it returns false.
- The global isNaN() function, converts the tested value to a Number, then tests it.

** Return Value:
    A Boolean. Returns true if the value is NaN, otherwise it returns false

    --- returns false (they are numbers or can be translate to a number):
            isNaN(123)
            isNaN(-1.23)
            isNaN(5-2)
            isNaN(0)

            isNaN('123')
            isNaN('')

            isNaN(true)
            isNaN(null)
    
    
    --- returns true (they are NOT numbers or can't be translate to a number):
            isNaN('Hello')
            isNaN('2005/12/12')
            isNaN(undefined)
            isNaN('NaN')
            isNaN(NaN)
            isNaN(0 / 0)


Number isNaN() Method:

- This function is different from the Number specific Number.isNaN() METHOD.
- Number.isNaN() does not convert the values to a Number, and will not return true for any value that is not of the type Number.

** Return Value:
    A Boolean. Returns true if the value is Number.NaN, otherwise it returns false

    --- returns false:
            isNaN(123)
            isNaN(-1.23)
            isNaN(5-2)
            isNaN(0)
            isNaN('123')
            isNaN('')
            isNaN(true)
            isNaN(null)
            isNaN('Hello')
            isNaN('2005/12/12')
            isNaN(undefined)
            isNaN('NaN')
    
    --- returns true:
            isNaN(NaN)
            isNaN(0 / 0)
*/
