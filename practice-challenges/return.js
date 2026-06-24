//Task: return undefined and null values without hard coding

console.log(name);
var name = "Jessa";

// function doesn't have a return keyword results to undefined
function getName(name) {
  name;
}

console.log(getName("Jessa"));

//null - it is intentional value
const ages = ["Jessa", "Gozun"];

console.log(ages[3] ?? null);

const me = " ";

console.log(me.trim() ? "Existing" : "Not existing");

//boolean conversion
console.log(!!me.trim());
