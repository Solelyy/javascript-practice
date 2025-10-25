let names = ['Alice', 'Jessa', 'Charlie'];
console.log(`Names: ${names.join(", ")}`);

console.log('\nAdding new name "Dana" to the array:');
names.unshift('Dana'); // Add to the beginning
console.log(`Names after adding Dana: ${names.join(", ")}`);

console.log(`First name: ${names.shift()}`); //Remove from the beginning
console.log(`Names after removing the first name: ${names.join(", ")}`);

console.log(`Last name: ${names.pop()}`); //Remove from the end
console.log(`Names after removing the last name: ${names.join(", ")}`);

console.log(`Inserting new name at last position: "Eve"`);
names.push('Eve'); // Add to the end
console.log(`Names after adding Eve: ${names.join(", ")}`);