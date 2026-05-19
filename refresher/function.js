//function declaration
function changeName(personObject) {
  person.name = "Nazarene";
}

const person = {
  name: "Jessa",
  age: 20,
};

console.log("Original: " + person.name);
changeName(person);
console.log("New Name: " + person.name);

//function expression - not fully hoisted, it can have no name
const addition = function (a, b) {
  return a + b;
};

//can also do it as arrow function
// const addition = (a, b) => a + b;

console.log("Sum: " + addition(1, 1));

//Immediately Invoked Function Expressions (IIFE)
(function () {
  console.log("Hello");
})();

const print = (function () {
  return console.log("Hello world");
})();
