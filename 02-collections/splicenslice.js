let colors = ['Red', 'Green', 'Blue'];

console.log(`Colors: ${colors.join(", ")}`);

console.log(`Slice index 1 and 2: ${colors.slice(0,2).join(", ")}`); // Slicing from index 0 to 2 (not including 2)

console.log(`Splicing at index 1, removing it and adding yellow and purple:`);
colors.splice(1, 1, 'Yellow', 'Purple'); // splice[start, deleteCount, item1, item2, ...]
console.log(`Colors after splicing: ${colors.join(", ")}`);