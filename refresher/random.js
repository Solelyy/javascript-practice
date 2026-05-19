const obj = {
  foo: 1,
  bar: 2,
};

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}

/*----------------------- */
const ages = [1, 2, 3];

console.log(ages.join(", "));

const name = "Jessa";
const splitted = name.split("");
console.log(...splitted);
console.log(splitted);
console.log(typeof splitted);
console.log(typeof name);
