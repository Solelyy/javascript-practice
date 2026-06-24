// // //rest vs spread operator

// // const fruits = ["dalandan", "orange", "avocado", "strawberry"];

// // //spread  - one container into individual elements
// // console.log(...fruits);

// //rest several

// function sumAll(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sumAll(1, 2, 3, 4)); // 10

//spread - expands the array into individual values

const ages = [1, 2, 3, 4, 5];
console.log("Spread:", ...ages);

// rest - gather the individual values into array

function getAllNumbers(...numbers) {
  return numbers.reduce((total, numbers) => {
    return total + numbers;
  }, 0);
}

console.log(getAllNumbers(1, 2, 3, 4, 5));
