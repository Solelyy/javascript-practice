// const fruits = ["Jessa", , "Nazarene"];
// fruits[1] = "Dieta";
// console.log(fruits);

const random = new Array(10);

//we use let so that i will not be a global variable
for (let i = 0; i < random.length; i++) {
  let value = Math.floor(Math.random() * 100);

  random[i] = value;
}

console.log(random);
