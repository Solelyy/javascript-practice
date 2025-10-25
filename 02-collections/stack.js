let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(`Fruits in the stack: ${fruits.join(", ")}`);
    
console.log('\nPushing a new fruit onto the stack: Berry');
fruits.push('Berry');
console.log(`Fruits after pushing Berry: ${fruits.join(", ")}`);

console.log('\nPopping fruits from the stack:');
while (fruits.length > 0) {
    let fruit = fruits.pop();
    console.log(`Popped: ${fruit}`);
}