// object destructuring

const foo = {};

const { boo = "nazarene" } = foo;

// let boo = foo.boo ?? "nazarene";

console.log(boo);

// const ages = [10, 20, 30, 40, 50];
// ages.push(80);

// console.log(ages);

// const MY_OBJECT = {
//   key: "value",
// };

// MY_OBJECT.key = "otherValue";
// console.log(MY_OBJECT.key);

//array destructuring

const ages = [20, 30, 40, 50];

const [a, b, d, w, t = 60] = ages;
console.log(t);
console.log(...ages);
