/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


if (var1 == var2 && var3 == var4 || var5 == var6) {
  // do something
}

first it consider var1 == var2 AND var3 == var 4
then
compares the result with var5 == var6

it works actually like this :
if ((var1 == var2 && var3 == var4) || var5 == var6) {
    // do something
}

*/
