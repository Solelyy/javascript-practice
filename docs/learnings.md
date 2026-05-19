## Convert string to number

- parseInt(): it does not include the decimal, both parse methods include only the first numbers that without letter, for example: "5jalfjf0" they will just return 5, they will return NaN for empty string ""

- we should include the radiz base, ex:
  console.log(parseInt("10", 2)); // the second argument is the radix
  commonly used base are:
  2 - binary,
  8 - octal,
  10 - default number system for numeric opeations and display,
  16 - hexa

- parseFloat(): includes the decimal, and also it extracts the number even if it has other characters after. ex: "500fjalsjf"

- Number(): strict, it will return 0 if "". It will return NaN (Not a Number) when the number has letters included.

## const

- it cannot be reassigned, but it can be mutated.
- ex:
  const age = 20;
  age = 21; // this is not allowed.

- ex:
  cconst foo = {};

  const { boo = "nazarene" } = foo;
  console.log(boo);
  //this is allowed, mutations in object properties and array.
  //we also use the default value in destructuring, which means if the boo is undefined inside foo, nazarene will be the default value, but if we have boo: null inside foo, that is the value cause null is intentional value. but if we have boo: undefined inside foo, it will show "nazarene"

## Regex (Regular expressions)

- we can declare it enclosing with 2 ways:
  literal:
  const regex = /ab+c/
  calling the constructor:
  const regex = new RegExp("ab+c");
- it is also an object
- RegExp methods: exec(), test()
- paired with String methods:
  match(), matchAll(), replace(), replaceAll(), search(), split()

## Collections

- unshift(): Add to start
- shift(): Remove from start
- push: Add to end
- pop: Remove from end

## Methods

- .join():
  array to string
  ex:
  const ages = [1, 2, 3]
  ages.join(", ") //output: 1, 2, 3
- .split():
  string to array
  ex:
  const name = "Jessa";
  const splitted = name.split(""); //[ 'J', 'e', 's', 's', 'a' ]
