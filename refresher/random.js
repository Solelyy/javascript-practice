const obj = {
  foo: 1,
  bar: 2,
};

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}

/*----------------------- */
const ages = [1, 2, 3];

console.log(ages);
//array to string = .join();
console.log(ages.join(", "));

//string to array = .split()
const name = "Jessa";
const splitted = name.split("");
console.log(...splitted);
console.log(splitted);
console.log(typeof splitted);
console.log(typeof name);

//if emoji, best is spread operator
const emojies = "🧘🎧🎗";

const spreadEmojies = [...emojies];
console.log(spreadEmojies);

//it is corrupted
console.log(emojies.split(""));
