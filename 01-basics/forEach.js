let numbers = [1, 2, 3, 4, 5];

console.log(`Numbers in the array: ${numbers.join(", ")}`); 

//Square each number using for..of
console.log('\nSquaring each number in the array:');
for (let num of numbers){
    console.log(`${num} -> ${num * num}`);
}

//Print each number using forEach
console.log(`\nMultiplying each number by 10 using forEach:`);
numbers.forEach(num => console.log(`${num} -> ${num * 10}`)
);