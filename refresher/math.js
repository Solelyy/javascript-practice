const age = 20.01;
const floor = Math.floor(age);
console.log("Math.floor(): " + age + " -> " + floor); // 20

const ceil = Math.ceil(age);
console.log("Math.ceil(): " + age + " -> " + ceil); // 21

const numbers = [10, 20, 30, 40];

console.log();
console.log("Numbers: " + numbers);

const biggestNumber = Math.max(...numbers);
const smallestNumber = Math.min(...numbers);

console.log("Biggest number: " + biggestNumber);
console.log("Smallest number: " + smallestNumber);
