let numbers = new Set([1, 2, 3, 4, 5]);

console.log(`Numbers in the set: ${[...numbers].join(", ")}`);

console.log('\nAdding number 6 to the set:');
numbers.add(6);
console.log(`Numbers after adding 6: ${[...numbers].join(", ")}`);

console.log('\nDeleting number 3 from the set:');
numbers.delete(3);
console.log(`Numbers after deleting 3: ${[...numbers].join(", ")}`);

console.log(`\nChecking if number 4 is in the set: ${numbers.has(4)}`);