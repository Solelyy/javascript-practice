const car = {
  type: "4-wheels",
  "": "pink",
  "!": "blue",
  7: "orange",
};

console.log(car.type);
console.log(car[""]);
console.log(car[7]);
console.log(car["!"]);
//for invalid identifiers we must wrap it in "" and access it in [] bracket notation
